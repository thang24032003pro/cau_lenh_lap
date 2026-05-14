function syncOrders() {
    let attempts = 0;
    const maxAttempts = 5;

    console.log("Bắt đầu đồng bộ...");
    while (attempts < maxAttempts) {
        let networkError = true;
        attempts++;
        
        if (networkError) {
            console.log(`Lỗi mạng lần ${attempts}, thử lại...`);
            continue;
        }
        
        console.log("Đồng bộ thành công!");
        break;
    }
}

function findDuplicateOrdersOptimized(orders) {
    let duplicates = [];
    let iterations = 0;

    for (let i = 0; i < orders.length - 1; i++) {
        for (let j = i + 1; j < orders.length; j++) {
            iterations++;
            if (orders[i] === orders[j]) {
                if (!duplicates.includes(orders[i])) {
                    duplicates.push(orders[i]);
                }
                break;
            }
        }
    }
    console.log(`Tổng số bước lặp (Mới): ${iterations}`);
    return duplicates;
}