//your JS code here. If required.
let Promise1 = ()=>{
    let start=performance.now();
	return new Promise((resolve)=>{
        setTimeout(()=>{
            let timeTaken=((performance.now()-start)/1000).toFixed(3);
			resolve({name:"Promise 1",time:timeTaken});
		},2000)
	})
}
let Promise2= ()=>{
    let start=performance.now();
	return new Promise((resolve)=>{
		setTimeout(()=>{
            let timeTaken=((performance.now()-start)/1000).toFixed(3);
			resolve({name:"Promise 2",time:timeTaken});
		},1000)
	})
};
let Promise3= ()=>{
    let start=performance.now();
	return new Promise((resolve)=>{
		setTimeout(()=>{
            let timeTaken=((performance.now()-start)/1000).toFixed(3);
			resolve({name:"Promise 3",time:timeTaken});
		},3000)
	});
};

Promise.all([Promise1(),Promise2(),Promise3()]).then((data)=>{
	let tbody=document.getElementById("output");
    tbody.innerHTML=""
    console.log(data)
    data.forEach((item)=>{
        tbody.innerHTML+=
       ` <tr>
            <td>${item.name}</td>
            <td>${item.time}</td>
        </tr>`
    })
})