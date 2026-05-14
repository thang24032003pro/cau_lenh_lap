function processPending(data) {
    let i = 0;
    while (i < data.length) {
        if (data[i].status === "pending") {
            console.log("Đang xử lý giao dịch:", data[i].id);
        }
        i++; 
    }
}

function findDuplicatesOptimized(data) {
    let duplicateIds = [];
    let loopCount = 0;
    
   for (let i = 0; i < data.length - 1; i++) {
        for (let j = i + 1; j < data.length; j++) {
            loopCount++; 
            if (data[i].userId === data[j].userId && data[i].amount === data[j].amount) {
                if (!duplicateIds.includes(data[j].id)) {
                    duplicateIds.push(data[j].id);
                }
            }
        }
    }
    console.log(`Số vòng lặp thực tế: ${loopCount}`);
    return duplicateIds;
}