// sort contacts

const sortContacts = (arrContacts, isAsc = true) => {
  if (!Array.isArray(arrContacts)) {
    return null;
  }

  return arrContacts.sort((a, b) => {
    if (isAsc) {
      return a.name.localeCompare(b.name);
    }

    return b.name.localeCompare(a.name);
  });
};
