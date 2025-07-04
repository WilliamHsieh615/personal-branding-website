document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#mailchimp-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        fetch('https://gmail.us11.list-manage.com/subscribe/post?u=9e322c0b88230b1d5077c8d86&amp;id=1de2b26d55&amp;f_id=00f710e1f0', {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        });

        Swal.fire({
            icon: 'success',
            title: '已送出成功！',
            text: '我們已收到你的訊息，會盡快與你聯絡！！',
            confirmButtonText: '了解',
            timer: 3000
        });

        form.reset();
    });
});


