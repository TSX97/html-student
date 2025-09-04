cmake_minimum_required(VERSION 4.1.1)

project(script)

set(CMAKE_CXX_STANDART 23)
set(CMAKE_CXX_STANDART_REQUIRED True)

set(VARIABLE "hoba")
message(STATUS ${VARIABLE})

add_executable(script main.cpp)
