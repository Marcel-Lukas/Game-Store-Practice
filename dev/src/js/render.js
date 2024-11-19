function renderGames() {
  let contentRef = document.getElementById("game-list");
  contentRef.innerHTML = "";

  for (let indexGames = 0; indexGames < games.length; indexGames++) {
      contentRef.innerHTML += getGameTemplate(indexGames);
      renderComments(indexGames);
      renderLikeSection(indexGames);
  }
}


function renderComments(indexGames) {
  let contentRef = document.getElementById(indexGames);
  contentRef.innerHTML = "";
  for (let indexComment = 0; indexComment < games[indexGames].comments.length; indexComment++) {
      contentRef.innerHTML += getCommentTemplate(indexGames, indexComment);
  }
}


function renderLikeSection(indexGames) {
  let contentRef = document.getElementById("like-section" + indexGames);
  contentRef.innerHTML = "";
  if (games[indexGames].liked === true) {
      contentRef.innerHTML = getLikeSectionTemplate('btn-like', indexGames);
  }

  if (games[indexGames].liked === false) {
      contentRef.innerHTML = getLikeSectionTemplate('btn-unlike', indexGames);
  }
}