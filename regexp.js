{
    const regex1 = /fajar/;
    const regex2 = new RegExp("Fajar");

    const name = "Rama Fajar Fadhillah"
    let result = regex2.exec(name);
    // console.info(result);

    let test = regex1.test(name);
    // console.info(test);

}

{
    const name = "Rama Fajar\nRama Fajar\nRama Fajar\nRama Fajar";
    const fajar = /fajar/ig
    const rama = /rama/ig

    let result;
    while ((result = fajar.exec(name)) !== null) {
        console.info(result);
    }

    while ((result = rama.exec(name)) !== null) {
        console.info(result);
    }
}