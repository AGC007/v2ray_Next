const form = document.getElementById("form");
const input = document.getElementById("config");
const container = document.getElementById("container");
const message = document.getElementById("message");
const output = document.getElementById("output");
const button = document.getElementById("copy-btn");

let newConfigV2ray;
const NewDomainAndConfig =
  "NexTLS-Node.AGC007.Link:2083?type=ws&path=%2F&host=NexTLS.AGC007.Link&security=tls&fp=chrome&sni=NexTLS.AGC007.Link";

input.addEventListener("keyup", (e) => {
  if (e.target.value === "") {
    container.style.display = "none";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = input.value;
  if (inputValue === "") {
    alert("لطفا کانفیگتون رو وارد کنید.");
    return;
  }

  const uid = inputValue.split("@")[0];
  const domainAndConfig = inputValue.split("@")[1].split("#")[0];
  const configName = inputValue.split("@")[1].split("#")[1];

  newConfigV2ray = uid + "@" + NewDomainAndConfig + "#" + configName;
  message.textContent =
    "متن سرور را کپی و به برنامه ی خود اضافه کنید";
  output.textContent = newConfigV2ray;
  container.style.display = "block";
});

// button.addEventListener("click", function (e) {
//   if (newConfigV2ray === undefined) {
//     alert("لطفا کانفیگتون رو وارد کنید.");
//     return;
//   }
//   e.stopPropagation();

//   if (navigator.clipboard) {
//     navigator.clipboard.writeText(newConfigV2ray);
//     alert("سرور کپی شد");
//     return; //codes below wont be executed
//   }

//   output.focus();
//   output.select();

//   document.execCommand("copy");
// });
