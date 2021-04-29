import cv2 

trained_faces = cv2.CascadeClassifier("haarcascade_frontalface_default.xml")
img = cv2.imread('family.jpg')
gray_image = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
face_coordinates = trained_faces.detectMultiScale(gray_image)
print(face_coordinates)
c = face_coordinates
for (x, y, w, h) in face_coordinates:
    cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)
cv2.imshow("Face Detection", img)
cv2.waitKey()
print("all is good")