function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function(testUser){
      return goodUsers.some(function(validUser){
        return validUser.id === testUser.id;
      });
    });
  }
}

module.exports = checkUsersValid;