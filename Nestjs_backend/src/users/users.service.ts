import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user.entity';
import { Repository } from 'typeorm';
import { userInfo } from 'os';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ){

  }
  create(userDetail: CreateUserDto) {
    const newUser = this.userRepository.create({
      ...userDetail,
      createdAt: new Date()
    })

    return this.userRepository.save(newUser)
  }

  findAll() {
    return this.userRepository.find({});
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({id});
  }

  update(id: number, useDetail: UpdateUserDto) {
    return this.userRepository.update(id, useDetail);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
