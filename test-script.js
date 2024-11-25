var currentScript = document.currentScript;

let scriptURL = currentScript.src;

setTimeout(function () {

    var scriptParams = new URL(scriptURL).searchParams;

    let pParram = scriptParams.get('d');

    let haravan_order_info = document.querySelector(".section-content-column").innerHTML;

    if (!haravan_order_info.toLowerCase().includes('vietqr') && !haravan_order_info.toLowerCase().includes('chuyá»ƒn khoáº£n')) 
        return;

    if(pParram) {
        try {
            bankData = JSON.parse(atob(pParram));
        } catch (error) {
            return;
        }
    } else {
        return;
    }

    let account_number = bankData.account_number;
    let bank_bin = bankData.bank_bin;
    let bank_brand_name = bankData.bank_brand_name;
    let account_name = bankData.account_name;
    let content_prefix = bankData.prefix;
    let bank_code = bankData.bank_code;

    let amount_text = document.querySelector(".payment-due-price").innerHTML;
    let order_id = Haravan.checkout.order_id;
    let order_number = Haravan.checkout.order_number;
    //order_number = order_number.replace("#", "");
    order_number = order_number.replace("#", content_prefix);
    let order_code = order_number;
    //let order_code = content_prefix + order_number;

    let remark = order_code;

    if (bank_code === 'ICB') {
      remark = 'SEVQR ' + order_code;
    }

    let bank_logo_url = encodeURI(`https://qr.sepay.vn/assets/img/banklogo/${bank_code}.png`);

    let pay_status = "Unpaid";

    let amount = amount_text.split(',').join('').replace('â‚«', '');

    var popupdiv = document.createElement('div');
    popupdiv.innerHTML = `
    <style>

    @container sepay (max-width: 520px) {
      .col--md-two {
        width: 100% !important;
      }
      .col--md-two.border-end {
        border-right: none;
      }
      .sepay-pay-info {
        display: block !important;
      }
      .col--md-two {
        padding: 1rem !important;
      }
    }

    @container sepay (max-width: 560px) {
      .sepay-box table tr td {
        display: block;
        padding: 0;
      }
    } 

    .sepay-box table tr.border {
      border-bottom: 1px solid rgba(175,175,175,.34);
    }

    .col--md-two {
      padding: 1rem;
      box-sizing: border-box;
    }

    .sepay-box a {
        color: #2a9dcc;
        text-decoration: none;
        cursor: pointer;
    }

    .col--md-two.border-end {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .sepay-pay-info {
      display: flex;
    }

    .text-center {
        text-align: center!important;
    }
 
    .text-end {
        text-align: right!important;
    }

    .text-start {
        text-align: left!important;
    }
    
    .box-title {
        margin-top: 2px;
        margin-top: 12px;
        border-bottom: 1px solid rgba(175,175,175,.34);
    }

    .border-end {
        border-right: 1px solid rgba(175,175,175,.34);
    }

    .lh-lg {
        line-height: 2!important;
    }
    .sepay-box {
        container-type: inline-size;
        container-name: sepay;
        background-color: white;
        border: 1px solid rgba(175,175,175,.34);
    }

    .text-muted {
        color: #6c757d!important;
    }

    .font-weight-bold {
        font-weight: 700!important;
    }

    img.qr-image {
        max-width: 220px;
    }

    img.bank-logo {
        max-width: 150px;
    }

    .mt-3 {
        margin-top: 1rem!important;
    }

    .mb-2 {
        margin-bottom: 2rem;
    }

    .text-success {
        color: #28a745!important;
    }

    .qr-element {
        position: relative;
        padding: 5px;
        aspect-ratio: 1;
        max-width: max-content;
        margin: 10px auto;
      }
      .qr-top-border,
      .qr-bottom-border {
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 30%;
        left: 0;
      }
      .qr-top-border {
        top: 0;
      }
      .qr-bottom-border {
        bottom: 0;
      }
      .qr-top-border:after,
      .qr-top-border:before,
      .qr-bottom-border:after,
      .qr-bottom-border:before {
        content: '';
        width: 30%;
        height: 100%;
      }
      .qr-top-border:after,
      .qr-top-border:before {
        border-top: 1px solid green;
      }
      .qr-bottom-border:after,
      .qr-bottom-border:before {
        border-bottom: 1px solid green;
      }
      .qr-top-border:before,
      .qr-bottom-border:before {
        border-left: 1px solid green;
      }
      .qr-top-border:after,
      .qr-bottom-border:after {
        border-right: 1px solid green;
      }
    
    </style>
    <div class="sepay-box section__content section__content--bordered">
        <div class="box-title"><h3 class="text-center">HÆ°á»›ng dáº«n thanh toĂ¡n qua chuyá»ƒn khoáº£n ngĂ¢n hĂ ng</h3></div>
        <div class="sepay-message"></div>
           <div class="row sepay-pay-info">
             <div class="col col--md-two border-end">
<h4 class="text-center font-weight-bold">CĂ¡ch 1: Má»Ÿ app ngĂ¢n hĂ ng vĂ  quĂ©t mĂ£ QR</h4>
<div class="text-center">
  <div class="qr-element">
    <a href="https://qr.sepay.vn/img?acc=${account_number}&bank=${bank_bin}&amount=${amount}&des=${remark}&template=compact&download=yes" style="z-index: 1; display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; border: 1px solid #0ea5e9; position: absolute; bottom: 5px; right: 5px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#0ea5e9" d="M4 22v-2h16v2zm8-4L5 9h4V2h6v7h4z"/></svg>
    </a>
    <div class="qr-top-border"></div>
    <div class="qr-bottom-border"></div>
    <div class="qr-content"><img class="qr-image" src="https://qr.sepay.vn/img?acc=${account_number}&bank=${bank_bin}&amount=${amount}&des=${remark}&template=compact">
  </div>
  </div>
</div>
<div class="sepay-pay-footer" style="display: flex; justify-content: center; align-items: center;">Tráº¡ng thĂ¡i: Chá» thanh toĂ¡n...<img src="https://qr.sepay.vn/assets/img/loading.gif" style="width:17px; margin-left: 0.5rem;"></div>

             </div>
             <div class="col col--md-two">
    <h4 class="text-center font-weight-bold">CĂ¡ch 2: Chuyá»ƒn khoáº£n thá»§ cĂ´ng theo thĂ´ng tin</h4>
    <table class="mt-3 mx-auto table-sm lh-lg">
      <tbody>
        <tr>
          <td colspan="3" class="text-center">
            <img class="bank-logo" src="${bank_logo_url}">
          </td>
        </tr>
        <tr>
          <td colspan="3" class="text-center">
            <b>NgĂ¢n hĂ ng ${bank_brand_name}</b><br>
          </td>
        </tr>
        <tr class="border">
          <td style="width: 92px; vertical-align: top;">Chá»§ tĂ i khoáº£n:</td>
          <td colspan="2"  class="text-start"><span class="ml-1 font-weight-bold" id="copy_accholder">${account_name}</span>
          </td>
        </tr>
        <tr class="border">
          <td style="width: 92px; vertical-align: top;">Sá»‘ tĂ i khoáº£n:</td>
          <td>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span class="ml-1 font-weight-bold text-start" id="copy_accno">${account_number}</span>
              <span id="sepay_copy_account_number"><a id="sepay_copy_account_number_btn" href="javascript:;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#888888" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 7h10V5h2v14H5V5h2z"/></svg>
              </a></span>
            </div>
          </td>
        </tr>
        <tr class="border">
          <td style="width: 92px; vertical-align: top;">Sá»‘ tiá»n:</td>
          <td>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span class="ml-1  font-weight-bold text-start" id="copy_amount">${amount_text}</span>
              <span id="sepay_copy_amount"><a id="sepay_copy_amount_btn" href="javascript:;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#888888" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 7h10V5h2v14H5V5h2z"/></svg>
              </a></span>
            </div>
          </td>
        </tr>
        <tr class="border">
          <td style="width: 92px; vertical-align: top;">Ná»™i dung CK:</td>
          <td>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span id="copy_memo" class="ml-1 font-weight-bold text-start">${remark}</span>
              <span id="sepay_copy_transfer_content"><a id="sepay_copy_transfer_content_btn" href="javascript:;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#888888" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 7h10V5h2v14H5V5h2z"/></svg>
              </a></span>
            </div>
          </td>
        </tr>
<tr></tbody></table>

<p class="text-muted" style="font-size: 13px; background: #fffbeb; padding: 0.5rem 1rem">LÆ°u Ă½: Vui lĂ²ng giá»¯ nguyĂªn ná»™i dung <b>${remark}</b> khi chuyá»ƒn khoáº£n Ä‘á»ƒ há»‡ thá»‘ng tá»± xĂ¡c nháº­n thanh toĂ¡n.</p>

</div>
        </div>
    </div>
    
    `;
    document.getElementsByClassName('thank-you-additional-content')[0].append(popupdiv);


    function check_invoice_status() {
        $.ajax({
            url : "https://my.sepay.vn/userapi/transactions/check_transaction_status",
            type: "POST",
            data: {account_number: account_number, code: order_code,amount: parseInt(amount)},
            dataType: "JSON",
            success: function(data)
            {
                if(data.pay_status == true) {
                    pay_status = "Paid";
                    var div_paid_message = document.createElement('div');
                    div_paid_message.innerHTML = `<div class="text-center mb-2"><div style="height:50px"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check-circle text-success" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
                  </svg></div>    <h2 class="text-success">Thanh toĂ¡n thĂ nh cĂ´ng</h2></div>
                    `;
                    document.getElementsByClassName("sepay-message")[0].append(div_paid_message);

                    $(".sepay-pay-info").hide();
                    $(".sepay-pay-footer").hide();
                }  
            }
            
        });
    }
    
    setInterval( function () {
        if(pay_status == "Unpaid") {
            check_invoice_status();
        }
    }, 5000 );

    document.getElementById("sepay_copy_account_number").addEventListener("click", function () {
      navigator.clipboard.writeText(account_number);
      const copyBtnHtml = document.getElementById('sepay_copy_amount_btn').innerHTML;
      document.getElementById('sepay_copy_account_number_btn').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#0ea5e9" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 7h10V5h2v14H5V5h2zm.5 6.5L9 12l2 2l4.5-4.5L17 11l-6 6z"/></svg>';
      setTimeout(function () {
        document.getElementById('sepay_copy_account_number_btn').innerHTML = copyBtnHtml;
      }, 2000);
    });
  
    document.getElementById("sepay_copy_amount").addEventListener("click", function () {
      navigator.clipboard.writeText(amount);
      const copyBtnHtml = document.getElementById('sepay_copy_amount_btn').innerHTML;
      document.getElementById('sepay_copy_amount_btn').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#0ea5e9" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 7h10V5h2v14H5V5h2zm.5 6.5L9 12l2 2l4.5-4.5L17 11l-6 6z"/></svg>';
      setTimeout(function () {
        document.getElementById('sepay_copy_amount_btn').innerHTML = copyBtnHtml;
      }, 2000);
    });
  
    document.getElementById("sepay_copy_transfer_content").addEventListener("click", function () {
      navigator.clipboard.writeText(remark);
      const copyBtnHtml = document.getElementById('sepay_copy_amount_btn').innerHTML;
      document.getElementById('sepay_copy_transfer_content_btn').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#0ea5e9" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 7h10V5h2v14H5V5h2zm.5 6.5L9 12l2 2l4.5-4.5L17 11l-6 6z"/></svg>';
      setTimeout(function () {
        document.getElementById('sepay_copy_transfer_content_btn').innerHTML = copyBtnHtml;
      }, 2000);
    });

},300);
