var str = "<response-body content-type='application/json'>\n" +
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
    "</response-body>" ;
//创建文档对象
var parser=new DOMParser();
var xmlDoc=parser.parseFromString(str,"text/xml");
var rootNode=xmlDoc.lastChild;
console.log(rootNode.getName());
var xmlDiv=document.getElementById("xml_render");
function BuildTree(xmlDiv,currentElement) {

}