var prototype = {
    /**
     * 按字符读取文件内容，结果用字符串形式
     * encoding:GBK
     */
    readAsText: function(file, encoding) {
        var self = this;
        return new Promise(function(resolve, reject) {
            var reader = new FileReader();
            reader.onload = function() {
                resolve(this.result);
            };
            reader.onerror = function() {
                reject("read error")
            };
            reader.onabort = function() {
                //中断时触发reader.abort();
            };
            reader.onloadend = function() {
                //读取完成时触发，无论成功失败
            };
            reader.onloadstart = function() {
                //读取开始时触发
            };
            reader.onprogress = function() {
                //读取中
            };
            reader.readAsText(file, encoding);
        });
    },
    /**
     * 读图片以预览
     */
    readAsDataURL: function(file) {
        var self = this;
        return new Promise(function(resolve, reject) {
            var reader = new FileReader();
            reader.onload = function() {
                resolve(this.result);
            };
            reader.onerror = function() {
                reject("read error")
            };
            reader.onabort = function() {
                //中断时触发reader.abort();
            };
            reader.onloadend = function() {
                //读取完成时触发，无论成功失败
            };
            reader.onloadstart = function() {
                //读取开始时触发
            };
            reader.onprogress = function() {
                //读取中
            };
            reader.readAsDataURL(file);
        });
    },
    /**
     * 二进制字节表示
     */
    readAsBinaryString: function(file) {
        var self = this;
        return new Promise(function(resolve, reject) {
            var reader = new FileReader();
            reader.onload = function() {
                resolve(this.result);
            };
            reader.onerror = function() {
                reject("read error")
            };
            reader.onabort = function() {
                //中断时触发reader.abort();
            };
            reader.onloadend = function() {
                //读取完成时触发，无论成功失败
            };
            reader.onloadstart = function() {
                //读取开始时触发
            };
            reader.onprogress = function() {
                //读取中
            };
            reader.readAsBinaryString(file);
        });
    },
    /**
     * 按字节读取文件内容，结果用ArrayBuffer对象表示
     */
    readAsArrayBuffer: function(file) {
        var self = this;
        return new Promise(function(resolve, reject) {
            var reader = new FileReader();
            reader.onload = function() {
                resolve(this.result);
            };
            reader.onerror = function() {
                reject("read error")
            };
            reader.onabort = function() {
                //中断时触发reader.abort();
            };
            reader.onloadend = function() {
                //读取完成时触发，无论成功失败
            };
            reader.onloadstart = function() {
                //读取开始时触发
            };
            reader.onprogress = function() {
                //读取中
            };
            reader.readAsArrayBuffer(file);
        });
    },

    loadCsv: function(strData, strDelimiter) {
        strDelimiter = strDelimiter || ",";

        var objPattern = new RegExp((
            // Delimiters.  
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
            // Quoted fields.  
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
            // Standard fields.  
            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ), "gi");


        // Create an array to hold our data. Give the array  
        // a default empty first row.  
        var arrData = [
            []
        ];

        // Create an array to hold our individual pattern  
        // matching groups.  
        var arrMatches = null;


        // Keep looping over the regular expression matches  
        // until we can no longer find a match.  
        while (arrMatches = objPattern.exec(strData)) {

            // Get the delimiter that was found.  
            var strMatchedDelimiter = arrMatches[1];

            // Check to see if the given delimiter has a length  
            // (is not the start of string) and if it matches  
            // field delimiter. If id does not, then we know  
            // that this delimiter is a row delimiter.  
            if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
                // Since we have reached a new row of data,  
                // add an empty row to our data array.  
                arrData.push([]);
            }


            // Now that we have our delimiter out of the way,  
            // let's check to see which kind of value we  
            // captured (quoted or unquoted).  
            if (arrMatches[2]) {
                // We found a quoted value. When we capture  
                // this value, unescape any double quotes.  
                var strMatchedValue = arrMatches[2].replace(new RegExp("\"\"", "g"), "\"");
            } else {
                // We found a non-quoted value.  
                var strMatchedValue = arrMatches[3];
            }

            // Now that we have our value string, let's add  
            // it to the data array.  
            arrData[arrData.length - 1].push(strMatchedValue);
        }
        // Return the parsed data.  
        return (arrData);
    },
    /**
     * ReadXMLContent: function(content, file) {
      content = content.replace(/[\r\n]/g, "")
      
      var source = this.loadXml(content)
      var self = this;
      console.log("loadXml", source)
      var elements = source.getElementsByTagName("row");
      console.log("loadXml2", elements)
      this.tableColumnNames = [];
      this.tableColumnValues = [];
      for (var i = 0; i < elements.length; i++) {
        var row = elements[i];
        var cols = row.getElementsByTagName("col");
        var temp = [];
        for (var j = 0; j < cols.length; j++) {
          var col = cols[j];
          if (self.tableColumnNames.filterProperty("key", col.getAttribute("name")) == 0) {
            self.tableColumnNames.push({ key: col.getAttribute("name"), changedKey: col.getAttribute("name"), type: "STRING" })
          }
          temp.push({ key: col.getAttribute("name"), value: col.textContent })
          // console.log(col,col.getAttribute("name"),col.textContent)
        }
        self.tableColumnValues.push(temp);
      }
      console.log(self.tableColumnNames, self.tableColumnValues)
    },
     */
    loadXml: function(xmlString) {
        var xmlDoc = null,
            domParser = null;
        //判断浏览器的类型
        //支持IE浏览器 
        if (!window.DOMParser && window.ActiveXObject) { //window.DOMParser 判断是否是非ie浏览器
            var xmlDomVersions = ['MSXML.2.DOMDocument.6.0', 'MSXML.2.DOMDocument.3.0', 'Microsoft.XMLDOM'];
            for (var i = 0; i < xmlDomVersions.length; i++) {
                try {
                    xmlDoc = new ActiveXObject(xmlDomVersions[i]);
                    xmlDoc.async = false;
                    xmlDoc.loadXML(xmlString); //loadXML方法载入xml字符串
                    break;
                } catch (e) {}
            }
        }
        //支持Mozilla浏览器
        else if (window.DOMParser && document.implementation && document.implementation.createDocument) {

            try {
                /* DOMParser 对象解析 XML 文本并返回一个 XML Document 对象。
                 * 要使用 DOMParser，使用不带参数的构造函数来实例化它，然后调用其 parseFromString() 方法
                 * parseFromString(text, contentType) 参数text:要解析的 XML 标记 参数contentType文本的内容类型
                 * 可能是 "text/xml" 、"application/xml" 或 "application/xhtml+xml" 中的一个。注意，不支持 "text/html"。
                 */
                domParser = new DOMParser();
                xmlDoc = domParser.parseFromString(xmlString, 'text/xml');
            } catch (e) {}
        } else {
            return null;
        }

        return xmlDoc;
    },
}
export default prototype;