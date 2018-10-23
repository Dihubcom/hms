import isEmail from 'validator/lib/isEmail';


const Error = (props) => (
    <div {...props} style={{ color: '#A94442' }} />
);

export const email = (value, props, components) => {
    if (!isEmail(value)) {
        return (
            <Error>{`${value} is not a valid email.`}</Error>
        );
    }
};

export const required = (value, props, components) => {
    value = ('' + value).trim();
    if (!value) {
        return (
            <Error>{'This field is required.'}</Error>
        );
    }
};