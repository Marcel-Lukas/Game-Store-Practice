function getGameTemplate(gameIndex) {
  return `<section class="game-content">
          <p class="game-name">${games[gameIndex].name}</p>
          <div class="game-box">

            <img src="${games[gameIndex].picture}" alt="">

            <table>
              <tr>
                <td class="td1">Publisher:</td>
                <td class="td2">${games[gameIndex].publisher}</td>
              </tr>
              <tr>
                <td class="td1">Veröffentlichung:</td>
                <td class="td2">${games[gameIndex].release}</td>
              </tr>
              <tr>
                <td class="td1">Genre:</td>
                <td class="td2">${games[gameIndex].genre}</td>
              </tr>
              <tr>
                <td class="td1">Preis:</td>
                <td class="td2">${games[gameIndex].price.toFixed(2)} €<btn onclick="buyTrolling()" class="buy">Kaufen</btn></td>
              </tr>
              <tr>
                <td class="td1">Bewertungen:</td>
                <td class="td2"> <span id="like-section${gameIndex}"></span> </td>
              </tr>
            </table>
          </div>

          <div class="description-box">
            <span>${games[gameIndex].description}</span>
          </div>

          <div class="comment-box">
            <div id="${gameIndex}"></div>
          </div>


          <div class="add-comment-section">
            <div class="comment-input">

                <div class="center">
                    <label class="nick" for="nickname">Nickname:</label>
                    <input id="nickname${gameIndex}" type="text" minlength="3" required>
                </div>

                <div class="center" >
                    <label for="commentary">Kommentar:</label>
                    <textarea id="commentary${gameIndex}" type="text" minlength="3" maxlength="120" required></textarea>
                </div>

            </div>
          <button class="btn" onclick="addComment(${gameIndex})">Kommentieren</button>
        </div>`;
}

function getCommentTemplate(gameIndex, commentindex) {
  return `<div class="usernick">${games[gameIndex].comments[commentindex].user}:</div>
          <div class="comment">${games[gameIndex].comments[commentindex].comment}</div>`
}

function getLikeSectionTemplate(iconClass, gameIndex) {
  return `<span id="likeCount${gameIndex}">${games[gameIndex].likes}</span>
          <span onclick="toggleLike(${gameIndex})" id="likeButton${gameIndex}" class="${iconClass}"></span>`;
}