import { hubSpotRequest } from "@/lib/hubspot/client"
import type { HubSpotContactProperties, HubSpotUpsertContactResult } from "@/lib/hubspot/types"

/** HubSpot-defined association: note → contact */
const NOTE_TO_CONTACT_ASSOCIATION_TYPE_ID = 202

type BatchUpsertResponse = {
  results: Array<{
    id: string
    properties: HubSpotContactProperties
  }>
}

type CreateNoteResponse = {
  id: string
}

export async function upsertContactByEmail(
  email: string,
  properties: HubSpotContactProperties
): Promise<HubSpotUpsertContactResult> {
  const normalizedEmail = email.trim().toLowerCase()

  const body = {
    inputs: [
      {
        idProperty: "email",
        id: normalizedEmail,
        properties: {
          ...properties,
          email: normalizedEmail,
        },
      },
    ],
  }

  const data = await hubSpotRequest<BatchUpsertResponse>("/crm/v3/objects/contacts/batch/upsert", {
    method: "POST",
    body,
  })

  const contact = data.results[0]
  if (!contact?.id) {
    throw new Error("HubSpot contact upsert returned no contact id")
  }

  return {
    id: contact.id,
    properties: contact.properties ?? {},
  }
}

export async function createContactNote(contactId: string, noteBody: string): Promise<string> {
  const data = await hubSpotRequest<CreateNoteResponse>("/crm/v3/objects/notes", {
    method: "POST",
    body: {
      properties: {
        hs_timestamp: new Date().toISOString(),
        hs_note_body: noteBody,
      },
      associations: [
        {
          to: { id: contactId },
          types: [
            {
              associationCategory: "HUBSPOT_DEFINED",
              associationTypeId: NOTE_TO_CONTACT_ASSOCIATION_TYPE_ID,
            },
          ],
        },
      ],
    },
  })

  if (!data.id) {
    throw new Error("HubSpot note creation returned no note id")
  }

  return data.id
}
