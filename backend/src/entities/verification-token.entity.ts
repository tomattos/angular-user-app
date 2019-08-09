import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

type TokenType = 'registration' | 'forgot_pass';

@Entity()
export class VerificationTokenEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: string;

  @Column({
    type: 'date'
  })
  expirationDate: Date;

  @Column()
  type: TokenType;

  @OneToOne(type => UserEntity, user => user.id)
  @JoinColumn()
  user: UserEntity;
}
