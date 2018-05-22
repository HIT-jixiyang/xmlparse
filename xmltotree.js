window.onload = function() {
    var submit = document.getElementById("json_submit");
    submit.addEventListener("click", function(event) {
        try {
            var xmlText = document.getElementById("json_text");
            var xmlError = document.getElementById('json_error');
            var xmlDiv = document.getElementById("xml_render");
            var xml = "<response-body content-type='application/json'>\n" +
                "    <headers>\n" +
                "        <head>\n" +
                "        </head>\n" +
                "    </headers>\n" +
                "    <body>\n" +
                "        <item key='status' type='Integer' desc=''>200</item>\n" +
                "        <item key='message' type='String' desc=''>success</item>\n" +
                "        <item key='data' type='Object' desc=''>\n" +
                "            <item key='yesterday' type='Object' desc=''>\n" +
                "                <item key='date' type='String' desc=''>16日星期三</item>\n" +
                "                <item key='high' type='String' desc=''>高温 28℃ </item>\n" +
                "                <item key='fx' type='String' desc=''> 南风</item>\n" +
                "                <item key='low' type='String' desc=''> 低温 21℃</item>\n" +
                "                <item key='fl' type='String' desc=''> <![CDATA[<3级]]></item>\n" +
                "                <item key='type' type='String' desc=''> 多云</item>\n" +
                "            </item>\n" +
                "            <item key='forcast' type='Array' >\n" +
                "                <item key='date' type='String' desc='日期'>17日星期四</item>\n" +
                "                <item key='high' type='String' desc='最高温度'>高温 25℃ </item>\n" +
                "                <item key='fengxiang' type='String' desc='风向'> 南风</item>\n" +
                "                <item key='low' type='String' desc='最低温度'> 低温 21℃</item>\n" +
                "                <item key='fengli' type='String' desc='风力'> <![CDATA[<3级]]></item>\n" +
                "                <item key='type' type='String' desc='天气状态'> 小雨</item>\n" +
                "            </item>\n" +
                "            <item key='city' type='String' desc='城市名称'> 北京</item>\n" +
                "            <item key='aqi' type='String' desc='api'> 85</item>\n" +
                "            <item key='wendu' type='String' desc='温度'> 22</item>\n" +
                "            <item key='ganmao' type='String' desc='是否容易感冒'>相对今天出现了较大幅度降温，较易发生感冒，体质较弱的朋友请注意适当防护</item>\n" +
                "        </item>\n" +
                "    </body>\n" +
                "\n" +
                "</response-body>";
            var parser=new DOMParser();
            var xmlDoc=parser.parseFromString(str,"text/xml");
            var rootNode=xmlDoc.lastChild;
            xmlDiv.innerHTML = "";
            convertXMLToTree(xmlDiv, rootNode,"");
            xmlText.className = "col-md-12";
            xmlError.className = "row col-md-7 col-md-offset-5 hidden"
        } catch (ex) {
            xmlText.className = "col-md-12 form-control";
            xmlError.className = "row col-md-7 col-md-offset-5"
            xmlDiv.innerHTML = "";
        }

    });
}

function convertXMLToTree(xmlDiv, currentElement,path,type) {
	var array = true;

    console.log("现在的xml"+currentElement.getAttribute("key"));
    var ul = document.createElement('ul');
    ul.className = "hidden uiTree";
     var i=0;
     {
        for (var element in currentElement.childNodes) {
            var li = document.createElement('li');
            var anchor = document.createElement('a');
            var tmpPath = '';
            if (path == '') {
            	tmpPath +=element.getAttribute("key");
            } else {
            	if (!array ) {
            		tmpPath= path+"."+element.getAttribute("key")
            	} else {
            		if (currentElement.childNodes.length>0) {
            			tmpPath=path+"[" +i+"]";
            		} else {
            			tmpPath=path+"[" +i+"]."+key;
            		}
            	}
            }
            
            (function (p) {
            	anchor.addEventListener("click", function(event) {
            		console.log(p);
                var target = event.currentTarget;
                console.log(target);
                var nextUL = target.nextElementSibling;
                console.log(nextUL);
                if (nextUL) {
                    if (nextUL.className == 'hidden uiTree') {
                        nextUL.className = 'uiTree';
                        target.children[1].className = 'glyphicon glyphicon-chevron-down';
                        target
                    } else {
                        nextUL.className = 'hidden uiTree';
                        target.children[1].className = 'glyphicon glyphicon-chevron-right';
                    }
                }
            });
            })(tmpPath);
            var checkbox=document.createElement('input')
            var icon = document.createElement('i');
            var span = document.createElement('span');
            anchor.className = 'icon';
            icon.className = 'glyphicon glyphicon-chevron-right';
            checkbox.type='checkbox';
            anchor.appendChild(checkbox);
            anchor.appendChild(icon);

            if (currentElement.childNodes.length>0) {
                span.appendChild(document.createTextNode(currentElement.getAttribute("key")));
                anchor.appendChild(span);
                li.appendChild(anchor);
                convertXMLToTree(li, currentElement[i][key],tmpPath);
            } else {
                var flag = false;
                if (typeof currentElement[i] !== 'object') {
                    span.appendChild(document.createTextNode(currentElement[i]));
                    flag = true;

                } else {
                    span.appendChild(document.createTextNode(key + ": " + currentElement[i][key]));
                }
                anchor.appendChild(span);
                icon.className = '';
                li.appendChild(anchor);
            }
            ul.appendChild(li);
            if (flag) {
                break;
            }


        }


    }

    xmlDiv.appendChild(ul);



}
