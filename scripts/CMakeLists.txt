cmake_minimum_required(VERSION 4.1.1)

project(script)

set(CMAKE_CXX_STANDART 23)
set(CMAKE_CXX_STANDART_REQUIRED True)

set(VARIABLE "hobaaa")
message(STATUS ${VARIABLE})

add_subdirectory(my_math_lib)

include_directories(${CMAKE_SOURCE_DIR}/my_math_lib)

add_executable(script main.cpp)
target_link_libraries(script PRIVATE my_math_lib)
