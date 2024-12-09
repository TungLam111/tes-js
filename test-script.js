function orderStatus(order_status, order_created_at) {
return '';
}

// change UI
setTimeout(function () {

  $(".main-content .section .section-header").attr('style', `border-radius: 10px !important; padding: 20px; background-color: white; margin-bottom: 10px; box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.08);`);
  $(".main-content .section .section-header .os-description").html("Cảm ơn bạn đã đặt hàng tại <a href='https://jemmia.vn' target='_blank' style='color: #2E5359; border-radius: 4px; text-decoration: none;'>website jemmia.vn</a>. Sau khi nhận được đơn hàng, nhân viên chăm sóc sẽ liên hệ bạn trong thời gian sớm nhất.");
  $(".main-content .section .section-header .os-header-title").css('margin-bottom', '8px');

  $(".main-content .section .section-header").html(orderStatus());

  $(".footer-powered-by").css('display', 'none');
  $(".os-order-number").css('display', 'none');
  $(".hanging-icon.checkmark").css('display', 'none');

  $(".sepay-box").attr('style', 'border-radius: 10px !important');
  $(".content-box").attr('style', `border-radius: 10px !important; padding: 20px; background-color: white; margin-bottom: 10px; box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.08);`);
  $(".thank-you-additional-content").attr('style', `border-radius: 10px !important; padding: 20px; background-color: white; margin-bottom: 10px; box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.08);`);

  $(".sidebar .sidebar-content .order-summary").attr('style', `border-radius: 10px !important; padding: 20px; background-color: white; margin-bottom: 10px; box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.08);`);
  $(".sidebar .sidebar-content .order-summary").css('margin-top', `17px`);

  $(".content").attr('style', 'background: #f5f5f5 !important;');
  $(".content .wrap").attr('style', 'background: #f5f5f5 !important;');
  $(".content .wrap .main").attr('style', 'background: #f5f5f5 !important;');
  $(".content .wrap .sidebar").attr('style', 'background: #f5f5f5 !important;');

  if ($(window).width() >= 1000) {
      $('.sidebar').css({
          'padding-left': '1%',
          'width': '60%',
          'margin-top': '106px'
      });

      $('.main').css({
          'padding-right': '1%',
          'width': '60%'
      });

  }

  const toRemoveDiv = $(".main-content .thank-you-checkout-info")
  toRemoveDiv.remove()

  const qrContent = $(".main-content .thank-you-additional-content")

  const orderAddress = `
  <div class="shipping-info" style="border-radius: 10px !important; padding: 20px; background-color: white; border-radius: 16px !important; margin-bottom: 10px; box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.08);">
      <div style="font-size: 18px; line-height: 20.4px; font-weight: 600; color: black; margin-bottom: 10px;">
          Địa chỉ nhận hàng
      </div>
      <div>
              <div style="display: flex; flex-direction: row; gap: 10px;">
                  <p style="color: black">${Haravan.checkout.shipping_address.name}</p>
                  <p style="color: grey;">|</p>
                  <p style="color: black;">${Haravan.checkout.shipping_address.phone}</p>
              </div>
              <p style="color: grey;">${Haravan.checkout.shipping_address.district}, ${Haravan.checkout.shipping_address.province}, ${Haravan.checkout.shipping_address.country}</p>
      </div>
  </div>        
  `;

  const deliveryMethod = `
  <div class="shipping-method" style="border-radius: 10px !important; padding: 20px; background-color: white; border-radius: 16px !important; margin-bottom: 10px; box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.08);">
      <div style="font-size: 18px; line-height: 20.4px; font-weight: 600; color: black; margin-bottom: 10px;">
              <span class="flex-1 text-inherit font-normal px-2 pl-[7px] !font-[500] !text-[#91400D]">Phương thức nhận hàng</span>
      </div>
      <div style="color: black;">
          Giao hàng tận nơi
      </div>
  </div>
  `;

  qrContent.after(orderAddress);
  qrContent.after(deliveryMethod);
}, 350);
