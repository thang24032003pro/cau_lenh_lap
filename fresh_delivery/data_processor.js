function processSystem(orders, driversAvailable) {
    let totalRevenue = 0;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].amount <= 0) continue; // Skip đơn hàng lỗi
        totalRevenue += orders[i].amount;
    }
    console.log("Tổng doanh thu sạch: ", totalRevenue);

    let currentOrder = 0;
    while (driversAvailable > 0 && currentOrder < orders.length) {
        if (orders[currentOrder].status === "pending") {
            orders[currentOrder].status = "processing";
            driversAvailable--; 
            console.log(`Đã gán đơn ${orders[currentOrder].id}. Tài xế còn lại: ${driversAvailable}`);
        }
        currentOrder++;
    }
}

function fetchDataWithRetry() {
    let retryCount = 0;
    let data = null;
    do {
        console.log(`Đang thử lấy dữ liệu lần ${retryCount + 1}...`);
        retryCount++;
    } while (data === null && retryCount < 3);
}