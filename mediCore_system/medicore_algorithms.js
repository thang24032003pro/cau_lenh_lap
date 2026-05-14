
function findPatientById(dataArray, targetId) {
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].id === targetId) {
            return dataArray[i]; // Tìm thấy là trả về ngay, tiết kiệm CPU
        }
    }
    return null;
}

function filterCriticalPatients(dataArray) {
    let results = [];
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].status === "critical") {
            results[results.length] = dataArray[i]; // Hoặc dùng .push() nếu thiết bị nhúng hỗ trợ
        }
    }
    return results;
}

function calculateHospitalStats(dataArray) {
    if (dataArray.length === 0) return { percentCritical: 0, avgHeartRate: 0 };

    let criticalCount = 0;
    let totalHeartRate = 0;
    let heartRateEntries = 0;

    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].status === "critical") criticalCount++;

        if (typeof dataArray[i].heartRate === 'number' && dataArray[i].heartRate !== null) {
            totalHeartRate += dataArray[i].heartRate;
            heartRateEntries++;
        }
    }

    return {
        totalPatients: dataArray.length,
        percentCritical: (criticalCount / dataArray.length) * 100 + "%",
        avgHeartRate: heartRateEntries > 0 ? (totalHeartRate / heartRateEntries).toFixed(2) : 0
    };
}