import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseFilters } from "@nestjs/common";
import { CreateUserDto } from "./create-user.dto";
import { EntityNotFoundExceptionFilter } from "./entity-note-found-exception.filter";
import { UserService } from "./user.service";

@Controller('users')
@UseFilters(new EntityNotFoundExceptionFilter)
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async findAll() {
        return {
            data: await this.userService.findAll()
        }
    }

    @Get(':id')
    async fidOne(@Param('id') id: number) {
        return {
            data: await this.userService.findOne(id)
        }
    }

    @Post()
    async create(@Body() data: CreateUserDto) {
        return {
            data: await this.userService.create(data)
        }
    }

    @Put(':id')
    async update(@Body() data: CreateUserDto, @Param('id') id: number) {
        return {
            data: await this.userService.update(data, id)
        }
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: number) {
        await this.userService.delete(id)
    }
}