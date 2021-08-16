var name='柯南';
var mybtn = document.getElementById("btn");
mybtn.addEventListener("click", start);
function gameplay() {
  Swal.fire({
    title: '史上最倒楣的小學生闖關遊戲',
    input: 'text',
    inputValue: '柯南是我',
    showLoaderOnConfirm: true,
    confirmButtonText: 'GOGO',
    cancelButtonText: '我誰?',
    showCancelButton: true,
    allowOutsideClick: false,
    imageUrl: 'img/01.jpg',
    imageHeight: 300,
    focusConfirm:false
  }).then(function (result) {
    if (result.dismiss === 'cancel') {
      Swal.fire({
        title: `你是${name}!開始闖關`,
        text: `沒有人更倒楣了吧`,
        allowOutsideClick: false,
        imageUrl: 'img/02.jpg',
        imageHeight: 300
      }).then(start);
    }
    else {
      name = result.value;
      Swal.fire({
        title: `${name}!真相只有一個!!`,
        text: '挑戰童年陰影大回憶',
        allowOutsideClick: false,
        imageUrl: 'img/0.gif',
        imageHeight: 300
      }).then(start);
    }
  });
}


function start() {
      Swal.fire({
        title: `找出小黑!<br>請回答4題小學生都知道的問題！`,
        allowOutsideClick: false,
        imageUrl: 'img/01.gif',
        imageHeight: 300,
        focusConfirm:false,
      }).then(function () {
        Swal.fire({
          title: "第1題:",
          text: "氰化鉀中毒屍體會有杏仁味，安眠藥中毒呢?",
          confirmButtonText: '糖果味',
          cancelButtonText: '西瓜味',
          showCancelButton: true,
          allowOutsideClick: false,
          focusConfirm:false,
          imageUrl: 'img/03.gif',
          imageHeight: 300,
          confirmButtonColor: 'hotpink',
          cancelButtonColor: 'darkgreen',
        }).then((result) => {
          if (result.dismiss === 'cancel') {
            Swal.fire({
              title: "失敗",
              text: `西瓜是無辜的~`,
              confirmButtonText: "重新挑戰",
              allowOutsideClick: false,
            });
          }
          else {
            Swal.fire({ 
              title: "過關",
              text: "安眠藥物化學式中，含有芳香烃類的化合物質，作用後會產生甜味",
              allowOutsideClick: false,
              imageUrl: 'img/03.jpg',
              imageHeight: 300
            }).then(function () {
              Swal.fire({
                title: "第2題:",
                text: "此種血液噴濺，凶器最可能為何者?",
                confirmButtonText: '刀',
                cancelButtonText: '槍',
                showCancelButton: true,
                allowOutsideClick: false,
                imageUrl: 'img/04.jpg',
                imageHeight: 300,
                focusConfirm:false,
                confirmButtonColor: 'purple',
                cancelButtonColor: '#d33',
              }).then((result) => {
                if (result.dismiss !== 'cancel') {
                  Swal.fire({
                    title: "失敗",
                    text: "小學再讀20年",
                    confirmButtonText: "重新來過",
                    allowOutsideClick: false,
                  });
                }
                else {
                  Swal.fire({ 
                    title: "過關",
                    text: "霧狀噴濺是在一個快速動作的銳利凶器或子彈穿過才會留下",
                    imageUrl: 'img/06.JPG',
                    imageHeight: 300,
                    allowOutsideClick: false,
                  }).then(function () {
                    Swal.fire({
                      title: "第3關:",
                      text: "上吊通常死亡的主因?",
                      confirmButtonText: '腦部缺氧死亡',
                      cancelButtonText: '氣管閉塞窒息',
                      showCancelButton: true,
                      allowOutsideClick: false,
                      imageUrl: 'img/04.gif',
                      imageHeight: 300,
                      focusConfirm:false,
                      confirmButtonColor: 'purple',
                      cancelButtonColor: '#d33',
                    }).then((result) => {
                      if (result.dismiss === 'cancel') {
                        Swal.fire({
                      
                          title: "GAME OVER",
                          text: "實際上極少發生這種情況",
                          confirmButtonText: "重新來過",
                          allowOutsideClick: false,

                        });
                      }
                      else {
                        Swal.fire({ 
                          title: "過關",
                          text: "在繩套勒住兩側頸動脈後，人會在很短的時間內因大腦缺氧而昏厥",
                          allowOutsideClick: false,
                          imageUrl: 'img/05.gif',
                          imageHeight: 300
                        }).then(function () {
                          Swal.fire({
                            title: "第4關:",
                            text: "水中浮屍，男性朝下、女性朝上?",
                            confirmButtonText: '沒錯',
                            cancelButtonText: '不是吧',
                            focusConfirm:false,
                            showCancelButton: true,
                            allowOutsideClick: false,
                            imageUrl: 'img/06.JPG',
                            imageHeight: 300,
                            confirmButtonColor: 'purple',
                            cancelButtonColor: '#d33',
                          }).then((result) => {
                            if (result.dismiss === 'cancel') {
                              Swal.fire({
                                //B
                                title: "GAME OVER",
                                text: "身體放鬆才浮得起來",
                                confirmButtonText: "重來~",
                                allowOutsideClick: false,
                              });
                            }
                            else {
                              Swal.fire({ 
                                title: "過關",
                                text: "男性重心在胸部，女性重心在臀部",
                                allowOutsideClick: false,
                                imageUrl: 'img/06.gif',
                                imageHeight: 300,
                                confirmButtonText: "太棒了！",
                              }).then(function () {
                                      finish(1);
                                    });
                                  }
                                });
                              });
                            }
                          });
                        });
                      }
                    });
                  });
                }
              });
            });
    }

function finish(e) {
  if (e) {
    document.body.style.backgroundImage = "url('img/bg3.jpg')";
    mybtn.removeEventListener("click", start);
    mybtn.addEventListener("click", function(){
      location.reload();
    });
    mybtn.value = "恭喜抓獲小黑人，但是小學還是要再讀２０年～";
  }
}
gameplay();