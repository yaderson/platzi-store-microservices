import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdatePostDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description: string;

  @ApiPropertyOptional({
    description: 'Whether or not users can comment in this post',
  })
  @IsOptional()
  @IsBoolean()
  commentsEnabled: boolean;
}
