setTimeout(() => {
    const width = Number(prompt('ความกว้าง'));
    if (isNaN(width)) {
        alert('อย่าใส่ตัวอักษรในความกว้าง');
        return;
    }
    setTimeout(() => {
        const length = Number(prompt('ความยาว'));
        if (isNaN(length)) {
            alert('ใส่เลขความยาวมา');
            return;
        }
        setTimeout(() => {
            const height = Number(prompt('ความสูง'));
            if (isNaN(height)) {
                alert('ใส่ตัวเลขเถอะ');
                return;
            }
            setTimeout(() => {
                const brownieSize = width * length * height;
                alert('ปริมาตรบราวนี่ = ' + brownieSize);
            }, 3000)
        }, 2000)
    }, 1500)
}, 1000)