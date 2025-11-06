import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'نام و نام خانوادگی خود را وارد بفرمایید' })
  @IsString()
  firstName: string;
  @IsNotEmpty({ message: 'نام کاربری الزامی است' })
  @IsString()
  lastName: string;
  @IsNotEmpty({ message: 'تایین رمز عبور الزامی است' })
  @IsString()
  phoneNumber: string;
  @IsString()
  nationalCode: string;
  @IsNotEmpty({ message: 'انتخاب نقش کاربر الزامی است' })
  @IsString()
  roleId: string;
}
