import { IUserAvatar } from "./interface-user-avatar";
import * as S from "./styles";

export const UserAvatar = ({ uri }: IUserAvatar) => {
  return (
    <S.ContentAvatar>
      <S.Avatar
        source={{
          uri: uri,
        }}
        resizeMode="contain"
      />
    </S.ContentAvatar>
  );
};
