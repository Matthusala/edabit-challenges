function calculateNetVote(vote) {
  if (
    typeof votes !== "object" ||
    !votes.hasOwnProperty("upvotes") ||
    !votes.hasOwnProperty("downvotes")
  ) {
    throw new Error("Invalid");
  }
}
