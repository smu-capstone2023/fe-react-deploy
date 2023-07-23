export type AvatarProps = {
    src?: string;
    size?: string | number; //여기 보시면 string 형식으로 두면, 실제로 유저가 사용할 때, size="30px" 이렇게 보낼 수 있다는 의미였습니다. 그렇기 때문에 최대한 제한을 주어 number로만 제한 하는 것이 좋아보입니다.
    onClick?: fuction; // function 보다는 input, return 값을 명시해주면 좋습니다. 예를 들어 () => void 이런 형태가 되겠네요!
};
