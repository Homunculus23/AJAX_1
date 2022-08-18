getStyle.onclick = ()=>{
    const request = new XMLHttpRequest;
    request.open('GET', '/style.css');
    request.onreadystatechange = () => {
        if(request.status < 300 && request.readyState === 4){
            const style = document.createElement('style');
            style.innerHTML = request.response;
            document.head.appendChild(style);
        }else if(request.status >= 300 && request.readyState === 4){
            alert('style.css加载失败')
        }
    }
    request.send();
}

getJs.onclick = ()=>{
    const request = new XMLHttpRequest;
    request.open('GET', '/2.js');
    request.onreadystatechange = () => {
        if(request.status < 300 && request.readyState === 4){
            const script = document.createElement('script');
            script.innerHTML = request.response;
            document.body.appendChild(script);
        }else if(request.status >= 300 && request.readyState === 4){
            alert('2.js加载失败')
        }
    }
    request.send();
}

getHtml.onclick = ()=>{
    const request = new XMLHttpRequest;
    request.open('GET', '/3.html');
    request.onreadystatechange = () => {
        if(request.status < 300 && request.readyState === 4){
            const div = document.createElement('div');
            div.innerHTML = request.response;
            document.body.appendChild(div);
        }else if(request.status >= 300 && request.readyState === 4){
            alert('3.html加载失败')
        }
    }
    request.send();
}

getXml.onclick = ()=>{
    const request = new XMLHttpRequest;
    request.open('GET', '/4.xml');
    request.onreadystatechange = () => {
        if(request.status < 300 && request.readyState === 4){
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent.trim();
            console.log(text);
        }else if(request.status >= 300 && request.readyState === 4){
            alert('4.xml加载失败')
        }
    }
    request.send();
}

getJson.onclick = ()=>{
    const request = new XMLHttpRequest;
    request.open('GET', '/5.json');
    request.onreadystatechange = () => {
        if(request.status < 300 && request.readyState === 4){
            let obj;
            try {
                obj = JSON.parse(request.response);
            } catch (error) {
                console.log("出错了，错误详情是：")
                console.log(error)
                obj = {'name':""}
            }
            myName.textContent = obj.name
        }else if(request.status >= 300 && request.readyState === 4){
            alert('5.json加载失败')
        }
    }
    request.send();
}

let n = 1;
getPage.onclick = ()=>{
    n++;
    const request = new XMLHttpRequest;
    request.open('GET', `/page${n}`);
    request.onreadystatechange = () => {
        if(request.status < 300 && request.readyState === 4){
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.id;
                xxx.appendChild(li);
            });
        }else if(request.status >= 300 && request.readyState === 4){
            alert(`未找到page${n}`)
        }
    }
    request.send();
}