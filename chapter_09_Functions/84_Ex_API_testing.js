// if (statusCode >= 200 && statusCode < 300) 

function validateStatusCode (status) {
    if (status >= 200 && status < 300) {
        console.log ('Request is fine');
    }
}

validateStatusCode(200); // Request is fine
validateStatusCode(404); // No output, because the status code does not meet the condition

const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status < 300) {
        console.log ('Request is fine');
    }
}

const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status < 300) {
        console.log ('Request is fine');
    }
}

validateStatusCode_Exp(200);
validateStatusCode_Arrow(200);