import unittest
from readFiles import read_files_in_directory


# class WidgetTestCase(unittest.TestCase):
#     def setUp(self):
#         self.widget = Widget("The widget")

#     def test_default_widget_size(self):
#         self.assertEqual(self.widget.size(), (50, 50), "incorrect default size")

#     def test_widget_resize(self):
#         self.widget.resize(100, 150)
#         self.assertEqual(self.widget.size(), (100, 150), "wrong size after resize")


class Tests100mHeaders(unittest.TestCase):
    def setUp(self):
        self.data = read_files_in_directory("../data/huntsville/100m/")[0]

    def test_line14_contains_word(self):
        self.assertTrue("PI Contact Info" in self.data[13])

    def test_line16_contains_word(self):
        self.assertTrue("Station" in self.data[15])

    def test_line17_contains_word(self):
        self.assertTrue("Station Height" in self.data[16])

    def test_line18_contains_word(self):
        self.assertTrue("Latitude" in self.data[17])

    def test_line19_contains_word(self):
        self.assertTrue("Longitude" in self.data[18])

    def test_line20_contains_word(self):
        self.assertTrue("Flight Number" in self.data[19])

    def test_line21_contains_word(self):
        self.assertTrue("Launch Date" in self.data[20])

    def test_line22_contains_word(self):
        self.assertTrue("Launch Time" in self.data[21])

    def test_line23_contains_word(self):
        self.assertTrue("Radiosonde Type" in self.data[22])

    def test_line24_contains_word(self):
        self.assertTrue("Radiosonde Num" in self.data[23])

    def test_line25_contains_word(self):
        self.assertTrue("O3 Sonde ID" in self.data[24])

    def test_line26_contains_word(self):
        self.assertTrue("Sonde Total O3" in self.data[25])


if __name__ == "__main__":
    unittest.main(verbosity=2)
