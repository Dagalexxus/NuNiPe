import sys
def main():
    print(sys.argv[1:])
    name_of_png=sys.argv[1]
    height_of_frame=(int)(sys.argv[2])
    width_of_frame=(int)(sys.argv[3])
    number_of_frames=(int)(sys.argv[4])

    file=open(name_of_png+".json",'w')
    file.write("{\"frames\": {")
    for i in range(number_of_frames):
        file.write(
            """
            \"{0}_{1}\":
            {{
            \"frame\": {{\"x\":{2},\"y\":0,\"w\":{3},\"h\":{4}}},
            \"rotated\": false,
            \"trimmed\": false,
            \"spriteSourceSize\": {{\"x\":0,\"y\":0,\"w\":{5},\"h\":{6}}},
            \"sourceSize\": {{\"w\":{7},\"h\":{8}}}
            }}""".format(
                name_of_png,
                i,
                width_of_frame*i,
                width_of_frame,
                height_of_frame,
                width_of_frame,
                height_of_frame,
                width_of_frame,
                height_of_frame)
        )
        if i<number_of_frames-1:
            file.write(",")

    file.write("}\n}")
    file.close()


if __name__=="__main__":
    main()