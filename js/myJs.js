const textConfig = {
  text1: "Hihi em!",
  text2: "Anh có điều này muốn hỏi em, nhớ phải trả lời thật lòng nha!",
  text3: "Làm Vợ anh nhé? ❤️",
  text4: "Nếu em ko trả lời, là đồng ý làm Vợ anh rùi đó nha! 🥰",
  text5: "Anh mơ à?",
  text6: "Em đồng ý 😘",
  text7: "Lý do em yêu anh là gì thế?",
  text8: "Gửi anh 😘",
  text9: "Vì anh quá đẹp trai❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️",
  text10: "Anh biết mà ^^ Yêu em!",
  text11:
    "Mình cưới luôn trong năm nay nhé? ❤️",
  text12: "Okay luôn!",
  text13: "Dear My Love",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".crush-spinner").fadeOut();
    $("#crush-preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#content-text13").html(textConfig.text13);
  $("#content-text3").html(textConfig.text3);
  $("#content-text4").html(textConfig.text4);
  $("#content-no").html(textConfig.text5);
  $("#content-yes").html(textConfig.text6);

  function firstQuestion() {
    $(".rsvp").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cute-hana.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".rsvp").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#content-no").css("left");
    var topNO = $("#content-no").css("top");
    var leftY = $("#content-yes").css("left");
    var topY = $("#content-yes").css("top");
    $("#content-no").css("left", leftY);
    $("#content-no").css("top", topY);
    $("#content-yes").css("left", leftNo);
    $("#content-yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#content-no").css("left", left);
    $("#content-no").css("top", top);
  }

  var n = 0;
  $("#content-no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#content-no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#content-yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Nhập câu trả lời ở đây...'>",
      background: '#fff url("img/iput-bg.jpg")',
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            var div = document.getElementById('rsvp');
            div.parentNode.removeChild(div);
            try {
              const myAudio = document.getElementById('myAudio');
              myAudio.play();
            } catch {
              console.error('FAILED_TO_PLAY_MUSIC');
            }
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
  var openLetter = document.getElementById("open-letter");
    openLetter.addEventListener("click", function() {
        console.log("click");
  var current = document.getElementsByClassName("envelopeActive");
  if (current.length > 0) { 
    console.log("> 0, ", current);
    current[0].className = current[0].className.replace("envelopeActive", "");
  }
  console.log("out");
  var btnOpen = document.getElementById('open-letter');
  btnOpen.parentNode.removeChild(btnOpen);
  });
});

