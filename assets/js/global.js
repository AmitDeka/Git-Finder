const API_URL = "https://api.github.com/users/";
const userDetails = document.querySelector("#userDetails");

getUserData = async (username) => {
  const response = await fetch(API_URL + username);
  const userData = await response.json();
  console.log(userData);

  userDetailsCard = `
    <div class="card_user_image">
        <img
            src="${userData.avatar_url}"
            alt="User Image" />
    </div>
    <div class="card_user_info">
        <div class="card_user_info_header">
            <div>
                <h1 class="card_user_info_header_name">
                    ${userData.name}
                </h1>
                <a
                  class="card_user_info_header_username"
                  href="${userData.html_url}"
                  >@${userData.login}</a
                >
            </div>
            <div>
              <p class="card_user_info_header_date">
                Joined <span>25 Jan 2022</span>
              </p>
            </div>
        </div>
        <div class="card_user_info_bio">
          <p>${userData.bio}</p>
        </div>
        <div class="card_user_info_repo">
            <div>
                <h2>Repos</h2>
                <p>${userData.public_repos}</p>
            </div>
            <div>
                <h2>Followers</h2>
                <p>${userData.followers}</p>
            </div>
            <div>
                <h2>Followings</h2>
                <p>${userData.following}</p>
            </div>
            </div>
        <div class="card_user_info_details">
            <div>
                <i class="ri-map-pin-fill"></i>
                <p>${userData.location}</p>
            </div>
            <div>
                <i class="ri-twitter-x-fill"></i>
                <p>${userData.twitter_username}</p>
            </div>
            <div>
                <i class="ri-links-fill"></i>
                <p>${userData.blog}</p>
            </div>
            <div>
                <i class="ri-building-fill"></i>
                <p>${userData.company}</p>
            </div>
        </div>
    </div>
  `;

  userDetails.innerHTML = userDetailsCard;
};

getUserData("sangammukherjee");
