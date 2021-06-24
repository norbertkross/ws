import React from 'react'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84'


//synthwave84
//tomorrow >
//darcula

const renderers = {
  code: ({language, value}) => {
    //console.log(value !== null);
    var newCode = value
    var oldCode = value || oldCode
    return <SyntaxHighlighter style={dark} language={"js"} children={newCode || ""} showLineNumbers={true}
    >
      
    </SyntaxHighlighter>
  }
}

// Did you know you can use tildes instead of backticks for code in markdown? ���


export default function CodeMarkDown(props) {
  var data = props.markdown; 
    return (
        <ReactMarkdown 
        renderers={renderers}
        // renderers={ReactMarkdown.renderers}
         children={`${data}`}
         >
        </ReactMarkdown>
    )
}
