add_library(my_math_lib STATIC my_math.cpp my_math.h)

target_include_directories(my_math_lib PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})
