const DOC_ID = '1v2JBn1EHa20kcwz5rtszoNmjx9Znqzk-dGMhKw1m3vE'
const API_KEY = 'AIzaSyBoX_m8IQZO2Fq__4XgkIRADhVXTJwtsbs'

import sheets from '@/helpers/sheets'
sheets.setKey(API_KEY)

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
      links: row[5],
      degree: row[6],
      year: row[7]
    })
  }
  if (group) {
    groups.push(group)
  }
  return groups
}

export async function loadResearch() {
  const response = await sheets.getContent(DOC_ID, 'Research', 'A2:F')
  const categories = []
  let category = null
  for (let row of response.values) {
    const title = row[0]
    if (!category || (category.title !== title)) {
      if (category) {
        categories.push(category)
      }
      category = { title, items: [] }
    }
    category.items.push({
      title: row[1],
      authors: row[2],
      booktitle: row[3],
      links: row[4],
      tags: (row[5] || '').split(',').map(tag => tag.trim())
    })
  }
  if (category) {
    categories.push(category)
  }
  return categories
}

export async function loadTags() {
  const response = await sheets.getContent(DOC_ID, 'Tags', 'A2:F')
  const tags = {}
  for (let row of response.values) {
    const tagId = row[0]
    tags[tagId] = {
      title: row[1],
      tag: row[2],
      color: row[3]
    }
  }
  return tags
}