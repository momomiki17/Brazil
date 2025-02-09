// script.js

document.addEventListener('DOMContentLoaded', function () {
    // ฟังก์ชันที่ทำงานเมื่อโหลดเพจเสร็จ
    console.log("เว็บไซต์ได้โหลดเสร็จสมบูรณ์แล้ว");

    // เพิ่ม event listener สำหรับการคลิกปุ่ม (เช่น การแสดงข้อความตอนคลิกปุ่ม)
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();  // ป้องกันการรีเฟรชหน้า
            alert('คุณกำลังไปยังหน้า: ' + this.textContent);
            window.location.href = this.href; // ไปยังลิงค์ที่เชื่อมโยง
        });
    });
});
