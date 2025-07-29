
//获取每一页
let pageList = document.querySelectorAll('.page')
pageList[0].style.display = 'flex'
for(let i = 1; i < pageList.length; i++) {
		pageList[i].style.display = 'none'
}
let audioBg = document.querySelector('.audio-frame')
let audios = document.querySelector('audio')
//加载页
load(document.querySelector('.lion'),document.querySelector('.load-text'))
music(audios, audioBg)
pageList[0].onclick = () =>{
	audios.play()
	audioBg.style.animation = 'music 2s linear infinite'
}
//第二页
let btn2 = document.querySelector('.p2-button')
//第三页
let btn3 = document.querySelector('.p3-button')
let ps = document.querySelectorAll('.juanzhou > p')
//第四页 
let btn7 = document.querySelector('.p7-button')
let btn8 = document.querySelector('.p8-button')
let page5 = document.querySelector('.page5')
let page6 = document.querySelector('.page6')
let page8 = document.querySelector('.page8')
let lights = document.querySelectorAll('.dengmi img')
//伪数组转换成数组
//let newlights = [].slice.call(lights);
let newlights = [...lights];
let labels = document.querySelectorAll('label')
let iImg = document.querySelectorAll('label > i')
let inputs = document.querySelectorAll('label > input')
let btn5 = document.getElementById('button')
let lastImg = document.querySelector(".page img")

let hh2 = document.querySelector('hgroup > h2')
let hh3 = document.querySelector('hgroup > h3')
let spans = document.querySelectorAll('label > span')
let h2s = ['充耳不闻无话讲', '春香连日去听琴', '山水相连称第一', '动物学索引', '二人别后又重逢', '公孙胜驾云，丁得孙狂奔']
let h3s = ['(打一茶叶名)', '(打一字)', '(打一广东地名)', '(打一成语)', '(打一字)', '(打一成语)']
let sps = [
	['龙井', '碧螺春', '佛手', '铁观音'],
	['项', '需', '秦', '鹏'],
	['深圳', '广州', '佛山', '汕头'],
	['虎头虎脑', '目中无人', '双龙戏珠', '物是人非'],
	['友', '归', '情', '笑'],
	['精神抖擞', '龙腾虎跃', '无法无天', '春暖花开']
]
/********************************************************************/
function page2() {
	audioBg.style.zIndex = '21'
	btn2.classList.add('btn-in')
	btndown(btn2, 1800)
	btn2.onclick = () => {
		jump(1, 2)
		page3()
		btn2.classList.remove('btn-in')
	}
}

function page3() {
	audioBg.style.zIndex = '0'
	btn3.style.transform = 'translate(-5.6rem)'
	for(let p of ps) {
		p.style.opacity = '0'
	}
	for(let i = 0; i < ps.length; i++) {
		setTimeout(() => {
			ps[i].style.animation = 'op 1.5s linear reverse forwards'
		}, 1200 * i)
	}
	ps[2].addEventListener('animationend', function() {
		btn3.classList.add('btn-in')
		btndown(btn3, 1800)
	}, false)
	btn3.onclick = () => {
		jump(2, 3)
		page4()
		page5s()
		btn3.classList.remove('btn-in')
		for(let p of ps){
			p.style.animation = 'none'
		}
	}
}
function page4(){
	opacityDown(page5)
	opacityDown(page6)
	opacityDown(page8)
	for(let light of lights){
			light.style.animation = 'suofang .5s linear infinite alternate'
		}
	//我的祝福
	btn7.onclick = ()=>{
		opacityUp(page8,1)
		btn8.classList.add('btn-in')
		btndown(btn8,1800)
		//lastImg进入动画
		//初始化
		for(let i of iImg) {
				i.style.backgroundImage = 'url(./img/o.png)'
			}
		for(let light of lights){
			light.src = 'img/deng-1.png'
			light.style.pointerEvents = ''
			light.index = false
		} 
		btn7.style.display = 'none'
		btn7.classList.remove('btn-in')
	}
	//返回首页
	btn8.onclick = ()=>{
		opacityDown(page8)
		jump(3,1)
		page2()
	}
}
function page5s() {
	for(let i = 0; i < lights.length; i++) {
		lights[i].onclick = () => {
			opacityUp(page5, 1)
			switch(i) {
				case 0:
					contents(0)
					texts('A', 0)
					break
				case 1:
					contents(1)
					texts('C', 1)
					break
				case 2:
					contents(2)
					texts('D', 2)
					break
				case 3:
					contents(3)
					texts('B', 3)
					break
				case 4:
					contents(4)
					texts('A', 4)
					break
				case 5:
					contents(5)
					texts('B', 5)
					break
			}
		}
	}

}
//内容切换函数 cas
function contents(cas) {
	hh2.innerHTML = h2s[cas]
	hh3.innerHTML = h3s[cas]
	for(let i = 0; i < spans.length; i++) {
		spans[i].innerHTML = sps[cas][i]
	}
}
function texts(daan, xuhao) {
	let index
	for(let i = 0; i < labels.length; i++) {
		labels[i].onclick = function() {
			//获取value
			index = inputs[i].value
			//设置选中状态
			for(let i of iImg) {
				i.style.backgroundImage = 'url(./img/o.png)'
			}
			iImg[i].style.backgroundImage = 'url(./img/oo.png)'
		}
	}
	btn5.style.border = '0.03rem solid transparent'
	btn5.onclick = function() {
		btn5.style.border = '0.03rem solid orange'
		if(index === daan) {
			lights[xuhao].style.animation = 'none'
			lights[xuhao].style.pointerEvents = 'none'
			lights[xuhao].src = 'img/deng-2.png'
			newlights[xuhao].index = true
			opacityDowns(page5)
			for(let i of iImg) {
				i.style.backgroundImage = 'url(./img/o.png)'
			}
			if(newlights.every(function(item){
				return item.index === true
			})){
				btn7.style.display = 'block'
				btn7.classList.add('btn-in')
				btndown(btn7,1800)
			}
			setTimeout(()=>{btn5.style.border = '0.03rem solid transparent'},1000)
		} else {
			opacityUp(page6)
			setTimeout(()=>{
				page6.style.display = 'none'
				btn5.style.border = '0.03rem solid transparent'
			},1000)
		}
	}
}
function music(audios, audioBg) {
	audioBg.onclick = () => {
		if(audios.paused) {
			audios.play()
			audioBg.style.animation = 'music 2s linear infinite'
		} else {
			audios.pause()
			audioBg.style.animation = 'none'
		}
	}
}

function load(img, text) {
	audioBg.style.zIndex = '0'
	for(let i = 0; i <= 100; i++) {
		setTimeout(() => {
			text.innerHTML = `Loading...${i}%`
			img.style.left = `${i}%`
			if(i === 100) {
				//换页 执行第二页函数
				jump(0, 1)
				page2()
			}
		}, 20 * i)
	}
}

function jump(nowPage, downPage) {
	pageList[nowPage].style.zIndex = '20'
	pageList[downPage].style.zIndex = ''
	pageList[downPage].style.display = 'flex'
	pageList[nowPage].classList.add('op')
	setTimeout(() => {
		pageList[nowPage].style.zIndex = ''
		pageList[downPage].style.zIndex = '20'
		pageList[nowPage].style.display = 'none'
		pageList[nowPage].classList.remove('op')
	}, 500)
}
function btndown(btn, time) {
	btn.style.pointerEvents = 'none'
	setTimeout(() => {
		btn.style.pointerEvents = ''
	}, time)
}

function opacityDown(page) {
	page.style.display = 'none'
	page.style.opacity = '0'
}

function opacityDowns(page) {
	page.style.animation = 'op .5s linear forwards'
	setTimeout(() => {
		page.style.animation = 'none'
		page.style.opacity = '0'
		page.style.display = 'none'
	}, 600)
}

function opacityUp(page, rul) {
	page.style.display = 'flex'
	page.style.animation = 'op .5s linear reverse forwards'
	setTimeout(() => {
		page.style.animation = 'none'
		if(rul === 1) {
			page.style.opacity = '1'
		}
	}, 600)
}





