    function formatDate(created_at) {
        const now = new Date();
        const createdDate = new Date(created_at);

        // Calculate the time difference in seconds
        const diffInSeconds = Math.floor((now - createdDate) / 1000);

        if (diffInSeconds < 60) {
            return "Vài giây trước";
        } else if (diffInSeconds < 3600) {  // less than 1 hour
            const numberOfMinutes = Math.floor(diffInSeconds / 60);
            return numberOfMinutes + " phút trước";
        } else if (diffInSeconds < 21600) {  // less than 6 hours
            const numberOfHours = Math.floor(diffInSeconds / 3600);
            return numberOfHours + " giờ trước";
        } else {
            // Format for date display
            const day = createdDate.getDate();
            const month = createdDate.getMonth() + 1; // Months are zero-based
            const year = createdDate.getFullYear();
            const hours = String(createdDate.getHours()).padStart(2, '0');
            const minutes = String(createdDate.getMinutes()).padStart(2, '0');

            return `${day}/${month}/${year} ${hours}:${minutes}`;
        }
    }

    function getFinancialStatusFromCode(financial_status) {
        if (financial_status == "pending") return "Chờ Thanh Toán"
        return "Thanh Toán Thành Công"
    }

    function orderStatus({ financial_status, order_created_at }) {
        const timeOrder = formatDate(order_created_at)
        const financialStatus = getFinancialStatusFromCode(financial_status)

        return `
        <div class="jemmia-order-section" style="
                        border-radius: 10px !important; 
                        padding: 20px;
                        background-color: white; 
                        margin-bottom: 15px; 
                        box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
                        gap: 13px; 
                        display: flex; 
                        flex-direction: column;
                        ">
                            <div class="jemmia-pay-status-box" style="
                                background: #FFFBEB;
                                border: 1px solid #FDE68B;
                                padding: 15px;
                                border-radius: 10px !important;
                                ">
                            <div style="display: flex; flex-direction: row; justify-content: start;align-items: center;gap: 10px;">
                                <div class="jemmia-pay-status-icon">
                                    <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
                                        <path
                                            d="M12.6665 9.33329V3.99996C12.6665 3.26663 12.0665 2.66663 11.3332 2.66663H1.99984C1.2665 2.66663 0.666504 3.26663 0.666504 3.99996V9.33329C0.666504 10.0666 1.2665 10.6666 1.99984 10.6666H11.3332C12.0665 10.6666 12.6665 10.0666 12.6665 9.33329ZM11.3332 9.33329H1.99984V3.99996H11.3332V9.33329ZM6.6665 4.66663C5.55984 4.66663 4.6665 5.55996 4.6665 6.66663C4.6665 7.77329 5.55984 8.66663 6.6665 8.66663C7.77317 8.66663 8.6665 7.77329 8.6665 6.66663C8.6665 5.55996 7.77317 4.66663 6.6665 4.66663ZM15.3332 4.66663V12C15.3332 12.7333 14.7332 13.3333 13.9998 13.3333H2.6665C2.6665 12.6666 2.6665 12.7333 2.6665 12H13.9998V4.66663C14.7332 4.66663 14.6665 4.66663 15.3332 4.66663Z"
                                            fill="#DB7706"></path>
                                    </svg>
                                </div>
                                <div 
                                    class="jemmia-pay-status-text"
                                    style="
                                    font-size: 16px;
                                    line-height: 24px;
                                    color: #DB7706;
                                    font-weight: 600">
                                        ${financialStatus}
                                </div>
                            </div>
                            </div>

                        <div style="
                                background: white;
                                border: 1px solid #808080;
                                padding: 15px;
                                border-radius: 10px !important;
                                ">
                            <div style="display: flex; flex-direction: row; align-items: start; gap: 10px;">
                    <div style="
                        flex: 0 0 24px;
                        border-radius: 50% !important;
                        width: 24px;
                        height: 24px;
                        align-items: center;
                        justify-content: center;
                        display: flex;
                        background: black;
                                                margin-top: 5px;

                    ">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style="width: 16px; height: 16px;">
                            <path
                                d="M22 5.18L10.59 16.6L6.35 12.36L7.76 10.95L10.59 13.78L20.59 3.78L22 5.18ZM19.79 10.22C19.92 10.79 20 11.39 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C13.58 4 15.04 4.46 16.28 5.25L17.72 3.81C16.1 2.67 14.13 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 10.81 21.78 9.67 21.4 8.61L19.79 10.22Z"
                                fill="#fff">
                            </path>
                        </svg>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 4px;">
                        <div style="font-size: 16px; line-height: 24px; color: black; font-weight: 600;">
                            Đặt hàng thành công
                        </div>
                        <div style="font-size: 13px; line-height: 24px; color: black;">
                            ${timeOrder}
                        </div>
                        <div style="font-size: 14px; color: black;">
                            Cảm ơn bạn đã đặt hàng tại 
                            <a href='https://jemmia.vn' target='_blank' style='color: #2E5359; border-radius: 4px; text-decoration: none;'>website jemmia.vn</a>.
                            Sau khi nhận được đơn hàng, nhân viên chăm sóc sẽ liên hệ bạn trong thời gian sớm nhất.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }

    // change UI
    setTimeout(function () {

        $(".main-content .section .section-header").html('');
        $(".thank-you-additional-content").before(orderStatus({
            financial_status: Haravan.checkout.financial_status,
            order_created_at: Haravan.checkout.created_at,
        }))

        $(".main-content .thank-you-checkout-info").remove()

        const orderAddress = `
        <div class="shipping-info" style="border-radius: 10px !important; padding: 15px; background-color: white; border-radius: 16px !important; margin-bottom: 15px; box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.08);">
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
        <div class="shipping-method" style="border-radius: 10px !important; padding: 15px; background-color: white; border-radius: 16px !important; margin-bottom: 15px; box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.08);">
            <div style="font-size: 18px; line-height: 20.4px; font-weight: 600; color: black; margin-bottom: 10px;">
                    <span class="flex-1 text-inherit font-normal px-2 pl-[7px] !font-[500] !text-[#91400D]">Phương thức nhận hàng</span>
            </div>
            <div style="color: black;">
                ${Haravan.checkout.shipping_rate.title}
            </div>
        </div>
        `;

        const qrContent = $(".main-content .thank-you-additional-content")
        qrContent.after(orderAddress);
        qrContent.after(deliveryMethod);

        // Apply new style
        staticStyle()
        restyle();

        // Reapply styles on window resize
        $(window).resize(function () {
            restyle();
        });
    }, 350);

    function staticStyle() {
        // ALL
        $(".footer-powered-by").css('display', 'none');
        $(".os-order-number").css('display', 'none');
        $(".hanging-icon.checkmark").css('display', 'none');
        $(".os-header").css('display', 'none');

        // ALL
        $(".sepay-box").attr('style', 'border-radius: 10px !important');
        $(".content-box").attr('style', `border-radius: 10px !important; padding: 20px; background-color: white; margin-bottom: 10px; box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.08);`);

        if ($(".thank-you-additional-content")) {
            $(".thank-you-additional-content").attr('style', `border-radius: 10px !important; padding: 20px; background-color: white; margin-bottom: 15px; margin-top: 0 !important; box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.08);`);
        }
        // ALL - Background color 
        $(".content").attr('style', 'background: #f5f5f5 !important;');
        $(".content .wrap").attr('style', 'background: #f5f5f5 !important;');
        $(".content .wrap .main").attr('style', 'background: #f5f5f5 !important;');
        $(".content .wrap .sidebar").attr('style', 'background: #f5f5f5 !important;');

        // ALL - CSS for action continue button
        $(".step-footer-continue-btn").attr('style',
            `background: black;
             padding-top: 10px !important;
             padding-bottom: 10px !important;
             border-radius: 4px !important; 
             font-weight: 500;`
        );

        $(".order-summary-toggle-icon-wrapper svg").css("fill", "black");
        $(".order-summary-toggle-text.order-summary-toggle-text-show span").css("color", "black");
        $(".order-summary-toggle-text.order-summary-toggle-text-show svg").css("fill", "black");
        $(".order-summary-toggle-text.order-summary-toggle-text-hide span").css("color", "black");
        $(".order-summary-toggle-text.order-summary-toggle-text-hide svg").css("fill", "black");

        $(".main-header .logo").html(`<div class="logo-cus"><img src="https://file.hstatic.net/200000355853/file/logo.svg"></div>`);
        $(".main-header .logo").css("padding", "0");
        $(".main-header .logo .logo-cus").css("padding", "0");

        $(".banner .wrap .logo").html(`<div class="logo-cus"><img src="https://file.hstatic.net/200000355853/file/logo.svg"></div>`);
        $(".banner .wrap .logo").css("padding", "0");
        $(".banner .wrap .logo .logo-cus").css("padding", "0");

        $(".content.content-second").css("display", "none");

        // ALL - price
        $(".total-recap-final-price").css("letter-spacing", "2px");
        $(".total-line-subtotal .order-summary-emphasis").css("letter-spacing", "2px");
        $(".product-price .order-summary-emphasis").css("letter-spacing", "2px");
        $(".payment-due-price").css("letter-spacing", "2px");
    }

    function restyle() {
        if ($(window).width() >= 1000) {
            $(".sidebar").attr('style', function (i, style) {
                return (style || '') + `
                padding-left: 1% !important;
                width: 60% !important;
                margin-top: 50px !important;
                `;
            });
            $(".main").attr('style', function (i, style) {
                return (style || '') + `
                padding-right: 1% !important;
                width: 60% !important;
                `;
            });

            $(".sidebar .sidebar-content .order-summary").attr('style', function (i, style) {
                return (style || '') + `
                border-radius: 10px !important;
                padding: 20px !important;
                background-color: white !important;
                margin-bottom: 10px !important;
                margin-top: 25px !important;
                box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.08) !important;
                `;
            });
        } else {
            $(".sidebar").attr('style', function (i, style) {
                return (style || '') + `
                width: 100% !important; 
                margin-top: 15px !important`;
            });
            $(".main").attr('style', function (i, style) {
                return (style || '') + `
                width: 100% !important; 
                margin-top: 0 !important; 
                padding-top: 0 !important;
                `;
            });

            $(".order-summary").attr('style', function (i, style) {
                return (style || '') + `
                    border-radius: 10px !important;
                    padding: 0 20px !important;
                    background-color: white;
                    margin-top: 0 !important;
                    margin-bottom: 0 !important;
                    box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.08) !important;
                `;
            });

            $(".order-summary-toggle").on("click", function () {
                if ($(this).hasClass("order-summary-toggle-show")) {
                    $(".order-summary").attr('style', function (i, style) {
                        return (style || '') + `
                        margin-bottom: 0 !important;
                        margin-top: 0 !important;`;
                    });
                } else {
                    $(".order-summary").attr('style', function (i, style) {
                        return (style || '') + `
                        margin-bottom: 15px !important;
                        margin-top: 0 !important;`;
                    });

                }
            })
        }
    }
