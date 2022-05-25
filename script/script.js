// NavBar
const pnlLogin = document.querySelector(".pnlLogin"); // variables requirement
const login = document.querySelector(".login");
const home = document.querySelector(".home");
const about = document.querySelector(".about");

// If we are on the Login page
if (pnlLogin != null) // if statements requirement
{
  login.addEventListener // event requirement
  ("click", function()
    {
      window.location.href = "index.html";
    }
  );
  home.addEventListener
  ("click", function()
    {
      window.location.href = "#";
      alert("Login required.");
      txtEmail.focus();
      txtEmail.select();
    }
  );
  about.addEventListener
  ("click", function()
    {
      window.location.href = "HTML/about.html";
    }
  );
} else // If we are not on the Login page.
{
  login.addEventListener
  ("click", function()
    {
      window.location.href = "../index.html";
    }
  );
  home.addEventListener
  ("click", function()
    {
      window.location.href = "../HTML/home.html";
    }
  );
  about.addEventListener
  ("click", function()
    {
      window.location.href = "../HTML/about.html";
    }
  );
}

// Index (Login Page)
let email = "jack@dragonlib.com";
let password = "password";
const cmdLogin = document.querySelector(".cmdLogin");
const txtEmail = document.querySelector(".txtEmail");
const txtPassword = document.querySelector(".txtPassword");

cmdLogin?.addEventListener
("click", function()
  {
    if (txtEmail.value != email || txtPassword.value != password)
    {
      alert("Wrong credentials!");
      txtEmail.value = "";
      txtPassword.value = "";
      txtEmail.focus();
      txtEmail.select();
    } else
    {
      window.location.href = "HTML/home.html";
    }
  }
)

// Home Page
const pnlParagraph = document.querySelector(".pnlParagraph");

function updateStoryImage(strSubject) // function requirement
{
  const storyImage = document.querySelector(".storyImage");
  if (strSubject == "Dragon")
  {
    storyImage.src = "../resources/images/Dragon.png";
  } else if (strSubject == "Princess")
  {
    storyImage.src = "../resources/images/princess.png";
  } else if (strSubject == "Adventure")
  {
    storyImage.src = "../resources/images/Dragon2.png";
  }else
  {
    storyImage.src = "../resources/images/sparkle.gif"
  }
}

function isFilled(array)
{
  let blnFilled = true;
  for (textbox of array) // loops requirement
  {
    if (textbox.value == "" || textbox.value == null)
    {
      blnFilled = false;
      alert("Please finish the form!");
      textbox.focus();
      textbox.select();
      break;
    }
  }
  return blnFilled;
}

// Subjects Panel
const cmdSubjects = document.querySelector(".cmdSubjects");
const grpSubjects = document.querySelector(".grpSubjects");
const cmbSubjects = document.querySelector(".cmbSubjects");

cmdSubjects?.addEventListener
("click", function()
  {
    grpSubjects.classList.add("form-close")
    if (cmbSubjects.value == "Dragon")
    {
      frmDragon.classList.add("form-open");
    } else if (cmbSubjects.value == "Princess")
    {
      frmPrincess.classList.add("form-open");
    } else if (cmbSubjects.value == "Adventure")
    {
      frmAdventure.classList.add("form-open");
    }
    updateStoryImage(cmbSubjects.value);
  }
)

// Story Output
const txtStory = document.querySelector(".txtStory");

// Dragon Form
const frmDragon = document.querySelector(".frmDragon");
const txtDragonColor = document.querySelector(".txtDragonColor");
const txtDragonSuperlative = document.querySelector(".txtDragonSuperlative");
const txtDragonAdjective1 = document.querySelector(".txtDragonAdjective1");
const txtDragonBodyPartP = document.querySelector(".txtDragonBodyPartP");
const txtDragonBodyPart = document.querySelector(".txtDragonBodyPart");
const txtDragonNoun = document.querySelector(".txtDragonNoun");
const txtDragonAnimal = document.querySelector(".txtDragonAnimal");
const txtDragonAdjective2 = document.querySelector(".txtDragonAdjective2");
const txtDragonAdjective3 = document.querySelector(".txtDragonAdjective3");
const txtDragonAdjective4 = document.querySelector(".txtDragonAdjective4");
const arrDragon = [txtDragonColor, txtDragonSuperlative, txtDragonAdjective1, txtDragonBodyPartP, txtDragonBodyPart, txtDragonNoun, txtDragonAnimal, txtDragonAdjective2, txtDragonAdjective3, txtDragonAdjective4]; // collections requirement
const cmdDragon = document.querySelector(".cmdDragon");

cmdDragon?.addEventListener
("click", function()
  {
    if (isFilled(arrDragon)) // call back requirement
    {
      pnlParagraph.classList.add("form-close");
      txtStory.classList.add("form-open");
      frmDragon.classList.remove("form-open");
      txtStory.innerHTML = `The ${txtDragonColor.value} Dragon is the ${txtDragonSuperlative.value} Dragon of all. It has ${txtDragonAdjective1.value} ${txtDragonBodyPartP.value}, and a ${txtDragonBodyPart.value} shaped like a ${txtDragonNoun.value}. It loves to eat ${txtDragonAnimal.value}, although it will feast on nearly anything. It is ${txtDragonAdjective2.value} and ${txtDragonAdjective3.value}. You must be ${txtDragonAdjective4.value} around it, or you may end up as its meal!`;
      console.log(`The ${txtDragonColor.value} Dragon is the ${txtDragonSuperlative.value} Dragon of all. It has ${txtDragonAdjective1.value} ${txtDragonBodyPartP.value}, and a ${txtDragonBodyPart.value} shaped like a ${txtDragonNoun.value}. It loves to eat ${txtDragonAnimal.value}, although it will feast on nearly anything. It is ${txtDragonAdjective2.value} and ${txtDragonAdjective3.value}. You must be ${txtDragonAdjective4.value} around it, or you may end up as its meal!`);
    }
  }
)

// Princess Form
const frmPrincess = document.querySelector(".frmPrincess");
const txtPrincessAdjective1 = document.querySelector(".txtPrincessAdjective1");
const txtPrincessName = document.querySelector(".txtPrincessName");
const txtPrincessNumber = document.querySelector(".txtPrincessNumber");
const txtPrincessRelative = document.querySelector(".txtPrincessRelative");
const txtPrincessPlace1 = document.querySelector(".txtPrincessPlace1");
const txtPrincessPlace2 = document.querySelector(".txtPrincessPlace2");
const txtPrincessVerb = document.querySelector(".txtPrincessVerb");
const txtPrincessNounP = document.querySelector(".txtPrincessNounP");
const txtPrincessAdjective2 = document.querySelector(".txtPrincessAdjective2");
const txtPrincessAdjective3 = document.querySelector(".txtPrincessAdjective3");
const txtPrincessPerson = document.querySelector(".txtPrincessPerson");
const txtPrincessAdjective = document.querySelector(".txtPrincessAdjective");
const arrPrincess = [txtPrincessAdjective1, txtPrincessName, txtPrincessNumber, txtPrincessRelative, txtPrincessPlace1, txtPrincessPlace2, txtPrincessVerb, txtPrincessNounP, txtPrincessAdjective2, txtPrincessAdjective3, txtPrincessPerson, txtPrincessAdjective];
const cmdPrincess = document.querySelector(".cmdPrincess");

cmdPrincess?.addEventListener
("click", function()
  {
    if (isFilled(arrPrincess))
    {
      pnlParagraph.classList.add("form-close");
      txtStory.classList.add("form-open");
      frmPrincess.classList.remove("form-open");
      txtStory.innerHTML = `A new and ${txtPrincessAdjective1.value} fairy princess movie is coming out soon! It will be about Snow ${txtPrincessName.value} and the ${txtPrincessNumber.value} dwarves. Snow ${txtPrincessName.value} is a princess whose beauty threatens her ${txtPrincessRelative.value}, the queen. Snow ${txtPrincessName.value} is forced to flee from ${txtPrincessPlace1.value} and hides in nearby ${txtPrincessPlace2.value}. There, she discovers the dwarves ${txtPrincessVerb.value} in their ${txtPrincessNounP.value}. But the queen finds her and casts a ${txtPrincessAdjective2.value} spell on her. The dwarves take care of her until the ${txtPrincessAdjective3.value} ${txtPrincessPerson.value} comes to rescue her, and they all live ${txtPrincessAdjective.value} ever after!`;
      console.log(`A new and ${txtPrincessAdjective1.value} fairy princess movie is coming out soon! It will be about Snow ${txtPrincessName.value} and the ${txtPrincessNumber.value} dwarves. Snow ${txtPrincessName.value} is a princess whose beauty threatens her ${txtPrincessRelative.value}, the queen. Snow ${txtPrincessName.value} is forced to flee from ${txtPrincessPlace1.value} and hides in nearby ${txtPrincessPlace2.value}. There, she discovers the dwarves ${txtPrincessVerb.value} in their ${txtPrincessNounP.value}. But the queen finds her and casts a ${txtPrincessAdjective2.value} spell on her. The dwarves take care of her until the ${txtPrincessAdjective3.value} ${txtPrincessPerson.value} comes to rescue her, and they all live ${txtPrincessAdjective.value} ever after!`);
    }
  }
)

// Adventure Form
const frmAdventure = document.querySelector(".frmAdventure");
const txtAdventureAdjective1 = document.querySelector(".txtAdventureAdjective1");
const txtAdventureAdjective2 = document.querySelector(".txtAdventureAdjective2");
const txtAdventurePlace = document.querySelector(".txtAdventurePlace");
const txtAdventureNumber = document.querySelector(".txtAdventureNumber");
const txtAdventureAdjective3 = document.querySelector(".txtAdventureAdjective3");
const txtAdventureSillyWord = document.querySelector(".txtAdventureSillyWord");
const txtAdventureVerb = document.querySelector(".txtAdventureVerb");
const arrAdventure = [txtAdventureAdjective1, txtAdventureAdjective2, txtAdventurePlace, txtAdventureNumber, txtAdventureAdjective3, txtAdventureSillyWord, txtAdventureVerb];
const cmdAdventure = document.querySelector(".cmdAdventure");

cmdAdventure?.addEventListener
("click", function()
  {
    if (isFilled(arrAdventure))
    {
      pnlParagraph.classList.add("form-close");
      txtStory.classList.add("form-open");
      frmAdventure.classList.remove("form-open");
      txtStory.innerHTML = `Inside the ${txtAdventureAdjective1.value} and ${txtAdventureAdjective2.value} ${txtAdventurePlace.value}, there were ${txtAdventureNumber.value} more ${txtAdventureAdjective3.value} kobolds. "${txtAdventureSillyWord.value}!" screamed the elf. "We might have bitten off more than we can ${txtAdventureVerb.value}!"`;
      console.log(`Inside the ${txtAdventureAdjective1.value} and ${txtAdventureAdjective2.value} ${txtAdventurePlace.value}, there were ${txtAdventureNumber.value} more ${txtAdventureAdjective3.value} kobolds. "${txtAdventureSillyWord.value}!" screamed the elf. "We might have bitten off more than we can ${txtAdventureVerb.value}!"`);
    }
  }
)