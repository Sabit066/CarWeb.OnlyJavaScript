
    let dom = {
        createElement: function (tagName, className, cssProps, location) {
            //create dom element
            let element = document.createElement(tagName);
            //check if this element is valid html element
            if (element != null) {
                //if so, then validate classname existance
                if (this._isValidValue(className)) {
                    element.className = className;
                    
                }
                //enumerate all css properties given as  object
                for (let f in cssProps) {
                    //check if object key is valid attribute
                    if (this._isValidAttr(f)) {
                        //then use it as attribute
                        element[f] = cssProps[f];
                    }
                    //otherwise,it is just style.Use it as style..
                    else {
                        element.style[f] = cssProps[f];
                    }
                }
            }
            location.appendChild(element);
            return element;
        },
        _isValidValue: function (val) {
            return (typeof (val) !== "undefined" && val)
        },
        _isValidAttr: function (attr) {
            return (attr == 'src' || attr == 'href' || attr == 'innerText' || attr == 'id');
        }
    }
    
    
    function createObject(Object){
        let maindiv=dom.createElement("div","container"," ",document.body);
       
       
        for(const i in Object){
            let carddiv=dom.createElement("div","card",{"width":"18rem"},maindiv);
            let image=dom.createElement("img","card-img-top",{"alt":"card-img","src":Object[i].img},carddiv);
            let divbody=dom.createElement("div","card-body",{"width":"100%"},carddiv);
            let divtitle=dom.createElement("div","card-title",{"width":"100%"},divbody);

            let title=dom.createElement("h4","title",{"innerText":Object[i].Marka},divtitle);
            let divprices=dom.createElement("div","card-text",{"width":"100%"},divbody);

            let divprice=dom.createElement("p","text",{"innerText":Object[i].Qiymet+"manat"},divprices);
            let divminprice=dom.createElement("p","text",{"innerText":Object[i].minQiymet+"manat"},divprices);
            let divyearwalked=dom.createElement("div","card-text",{"width":"100%"},divbody);

            let divyear=dom.createElement("p","text",{"innerText":Object[i].BuraxilisIli+"il"},divyearwalked);
            let divwalked=dom.createElement("p","text",{"innerText":Object[i].Yuruyus+"km"},divyearwalked);
            let divdate=dom.createElement("p","card-text",{"innerText":Object[i].QoyulmaTarixi},divbody);
            carddiv.addEventListener("click",function(){
                localStorage.clear();
                let stringChange=JSON.stringify(Object[i]); 
                localStorage.setItem("Car",stringChange);
                document.location="singlecar.html";
            })
        }
    }
    createObject(Cars);