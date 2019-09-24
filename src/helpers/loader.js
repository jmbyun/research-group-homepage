const DOC_ID = '1v2JBn1EHa20kcwz5rtszoNmjx9Znqzk-dGMhKw1m3vE'
const API_KEY = 'AIzaSyBoX_m8IQZO2Fq__4XgkIRADhVXTJwtsbs'

import sheets from '@/helpers/sheets'
sheets.setKey(API_KEY);

export async function loadMembers() {
  const response = await sheets.getContent(DOC_ID, 'Members', 'A2:H')
  const groups = []
  let group = null
  for (let row of response.values) {
    const title = row[0]
    if (!group || (group.title !== title)) {
      if (group) {
        groups.push(group)
      }
      group = { title, members: [] }
    }
    group.members.push({
      name: row[1],
      email: row[2],
      image: row[3],
      description: row[4],
      links: row[5]
    })
  }
  return groups
}