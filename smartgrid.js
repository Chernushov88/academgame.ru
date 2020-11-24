const smartgrid = require('smart-grid');

const settings = {
    columns: 24,
    offset: '10px',
    container: {
        maxWidth: '1290px',
        fields: '30px'
    },
    breakPoints: {
        lg: {
            width: "1024px",
            fields: "15px"
        },
        md: {
            width: "992px",
            fields: "20px"
        },
        sm: {
            width: "720px",
            fields: "10px"
        },
        xs: {
            width: "576px",
            fields: "5px"
        },
        xxs: {
            width: "380px",
            fields: "5px"
        }
    },
    oldSizeStyle: false,
    properties: [
        'justify-content'
    ]
};

smartgrid('./src/precss', settings);