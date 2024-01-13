interface User {
  email?: string // Make 'email' property optional, as it might be undefined or null
  // Add other properties if needed
}
export function extractEmails(users: User[]): string[] {
  if (users.length == 0) {
    return []
  }

  const emails: string[] = []

  users.forEach((person) => {
    if (person) {
      if (person.email != null && !emails.includes(person.email)) {
        emails.push(person.email)
      }
    }
  })

  return emails
}
