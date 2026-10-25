export const tool={
  "id": "E065",
  "slug": "eng-center-of-mass",
  "title": "두 물체 질량중심 계산기",
  "title_en": "Two Mass Center of Mass Calculator",
  "category": "역학",
  "category_en": "Mechanics",
  "fields": [
    {
      "key": "m1",
      "label": "첫 질량 m₁",
      "label_en": "First mass m₁",
      "dimension": "mass",
      "example": 1,
      "constraint": "positive",
      "display_unit": "kg",
      "display_value": "1"
    },
    {
      "key": "x1",
      "label": "첫 위치 x₁",
      "label_en": "First position x₁",
      "dimension": "length",
      "example": 0,
      "constraint": "signed",
      "display_unit": "m",
      "display_value": "0"
    },
    {
      "key": "m2",
      "label": "둘째 질량 m₂",
      "label_en": "Second mass m₂",
      "dimension": "mass",
      "example": 3,
      "constraint": "positive",
      "display_unit": "kg",
      "display_value": "3"
    },
    {
      "key": "x2",
      "label": "둘째 위치 x₂",
      "label_en": "Second position x₂",
      "dimension": "length",
      "example": 4,
      "constraint": "signed",
      "display_unit": "m",
      "display_value": "4"
    }
  ],
  "result_label": "한 축의 질량중심 x_cm",
  "result_label_en": "Center of mass on one axis x_cm",
  "result_dimension": "length",
  "formula": "x_cm = (m₁x₁+m₂x₂)/(m₁+m₂)",
  "purpose": "공통 원점을 기준으로 두 점질량의 1차원 질량중심 계산",
  "purpose_en": "Calculate the center of mass of two point masses on one axis.",
  "assumptions": "m₁,m₂>0. 두 위치는 같은 원점·축·단위 기준을 사용한다. 물체의 확장 크기·3차원 좌표·관성모멘트는 계산하지 않는다.",
  "assumptions_en": "Required: m₁,m₂>0 and positions on the same axis with a common origin. Extended shape, three-dimensional coordinates and moments of inertia are excluded.",
  "sources": [
    {
      "label": "OpenStax · 9 6 center of mass",
      "url": "https://openstax.org/books/university-physics-volume-1/pages/9-6-center-of-mass"
    }
  ],
  "condition": "",
  "condition_en": "",
  "site": "https://nanalab.kr/eng-center-of-mass/",
  "repository": "https://github.com/NaNaCompany/eng-center-of-mass",
  "output_unit": "m"
};
