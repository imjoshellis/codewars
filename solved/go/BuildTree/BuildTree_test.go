package main
    
    func TestBuildTree(t *testing.T) {
      exp := []string{"1"}
      args := []int{1}
      for i, arg := range args {
        res := buildTree(arg)
        if res != exp[i] {
          t.Fatalf("Expected %v, got %v with %v arg", exp[i], res, arg)
        }
      }
    }