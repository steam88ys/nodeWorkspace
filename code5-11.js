function print(name, count) {
    if(typeof(count)== "undefined") {
        count = 1;
    }

    console.log(`${name}이/가 ${count}개 있습니다.`)
}

print("사과");