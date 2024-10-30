import Latex from "react-latex-next";
import { HeaderCategory } from "../../Single/HeaderCategory";
import { StandardHeader } from "../../Single/StandardHeader";

export const MathsContent = () => {
  return (
    <div>
      <div className="mt-4">
        <div className="flex justify-between">
          <div className="font-bold">Fourier transform:</div>
          <div>
            <Latex>
              {"$F(\\omega) =\\int_{-\\infty}^{\\infty} f(t)e^{-i\\omega t}dt$"}
            </Latex>
          </div>
          <div>

          </div>
        </div>

        <div className="mt-2">
          Helps to go from temporal to frequency domain and vice-versa.
        </div>
        <div className="">
          Problem, it can only be done for function f that are integrable
          between <Latex>{"$[-\\infty ;\\infty]$"}</Latex>
        </div>
        <div className="">
          If we have a function <Latex>{"$x(t)=e^t$"}</Latex>, then{" "}
          <Latex>
            {
              "$\\int_{-\\infty}^{\\infty} e^te^{-i\\omega t}dt = \\int_{-\\infty}^{\\infty} e^{(-i\\omega+1) t}dt$"
            }
          </Latex>{" "}
          is hardly integrable (<Latex>{"$Re(1-i\\omega)=1>0$"}</Latex>).
        </div>
        <div className="mt-8 flex  justify-between">
          <div className="font-bold ">Laplace transform:</div>
          <div className="">
            <Latex>{"$F(s) =\\int_{-\\infty}^{\\infty} f(t)e^{-st}dt $"}</Latex>
          </div>
          <div>
          </div>
        </div>
        <div className="mt-2">
          With <Latex>{"$ s=\\sigma + i\\omega$"}</Latex>.
        </div>
        <div className=" ">
          Now we can integrate functions that are bounded by exponentials i.e.{" "}
          <Latex>{"$|f(t)| \\le Ae^{\\alpha t}, (A,\\alpha) \\in R $"}</Latex>{" "}
          if <Latex>{"$\\alpha \\lt \\sigma $"}</Latex>.
        </div>
        <div className="mt-8 flex justify-between">
          <div className="font-bold ">Convolution:</div>
          <div>
            <Latex>
              {
                "$(f * g)(t) =\\int_{-\\infty}^{\\infty} f(\\tau)g(t-\\tau)d\\tau $"
              }
            </Latex>
          </div>
          <div>
          </div>
        </div>
        <div className="mt-8 flex justify-between">
          <div className="font-bold  ">
            Convolution of a Laplace transform:
          </div>
          <div className="">
            <Latex>{"$L(f * g)(s) =F(s)G(s) $"}</Latex>
          </div>
          <div>

          </div>
        </div>
        <div className=" mt-4">
          <div className="flex flex-wrap items-center">
            <div className="font-bold  ">Divergence:</div>
            <Latex>
              {`$$\\vec{\\nabla} = 
              \\left(
                \\begin{array}{c}
                \\frac{\\partial}{\\partial x}  \\\\
                \\frac{\\partial}{\\partial y}  \\\\
                \\frac{\\partial}{\\partial z} \\\\
                \\end{array}
                \\right)
                $$`}
            </Latex>
          </div>

          <div>
            Divergence is, in short, a vectorial derivative. It can be applied
            to vectors:
          </div>
          <div className="items-center">
            <div className="font-bold  ">
              <Latex>
                {`$$ E \\rightarrow C;
                $$`}
              </Latex>
            </div>
            <div className="flex items-center">
              <Latex>
                {`$$ \\vec{\\nabla}.\\vec{F} = 
              \\left(
                \\begin{array}{c}
                \\frac{\\partial}{\\partial x}  \\\\
                \\frac{\\partial}{\\partial y}  \\\\
                \\frac{\\partial}{\\partial z} \\\\
                \\end{array}
                \\right) 
                .
                \\left(
                  \\begin{array}{c}
                  Fx \\\\
                  Fy  \\\\
                  Fz \\\\
                  \\end{array}
                  \\right) 
                  $$`}
              </Latex>
              <Latex>{`$$= \\frac{\\partial Fx}{\\partial x} + \\frac{\\partial Fy}{\\partial y} + \\frac{\\partial Fz}{\\partial z}$$`}</Latex>
            </div>
          </div>
        </div>
        <div className=" ">
          Or to scalars:
        </div>
        <div className="flex items-center">
          <div className="font-bold mr-2">
            <Latex>
              {`$$ C \\rightarrow E;
                $$`}
            </Latex>
          </div>
          <Latex>
            {`$$\\vec{\\nabla} f = 
              \\left(
                \\begin{array}{c}
                \\frac{\\partial}{\\partial x}  \\\\
                \\frac{\\partial}{\\partial y}  \\\\
                \\frac{\\partial}{\\partial z} \\\\
                \\end{array}
                \\right) 
                f 
                $$`}
          </Latex>
          <Latex>{`$$= \\left(
                \\begin{array}{c}
                \\frac{\\partial f}{\\partial x}  \\\\
                \\frac{\\partial f}{\\partial y}  \\\\
                \\frac{\\partial f}{\\partial z} \\\\
                \\end{array}
                \\right) $$`}</Latex>
        </div>
      </div>
      <div className=" mt-4">
        <div className="flex flex-wrap items-center">
          <div className="font-bold  ">Curl:</div>
          <div className=" ">
            <Latex>
              {`$$ \\vec{\\nabla} x \\vec{F} = 
              \\left(
                \\begin{array}{c}
                \\frac{\\partial}{\\partial x}  \\\\
                \\frac{\\partial}{\\partial y}  \\\\
                \\frac{\\partial}{\\partial z} \\\\
                \\end{array}
                \\right) 
                x 
                \\left(
                  \\begin{array}{c}
                  Fx  \\\\
                  Fy  \\\\
                  Fz \\\\
                  \\end{array}
                  \\right) = \\left(
                    \\begin{array}{c}
                    \\frac{\\partial Fz}{\\partial y} - \\frac{\\partial Fy}{\\partial z} \\\\
                    - \\frac{\\partial Fz}{\\partial x} + \\frac{\\partial Fx}{\\partial z}  \\\\
                    \\frac{\\partial Fy}{\\partial x} -\\frac{\\partial Fx}{\\partial y}   \\\\
                    \\end{array}
                    \\right)   
                    $$`}
            </Latex>
          </div>
        </div>
      </div>
      <div className=" mt-4">
        <div className="flex flex-wrap items-center">
          <div className="font-bold  ">Green Ostrogradski theorem:</div>
          <Latex>
            {`$$ \\int_V{}^{} \\vec{\\nabla} . \\vec{F} dV =  \\int_S{}^{} \\vec{F} . \\vec{n} dS
                $$`}
          </Latex>
        </div>
      </div>
    </div>

  );
};
const intro = <div>
  A reminder of some useful mathematical tools
</div>

export const Maths = () => {
  return (
    <>
      <StandardHeader title={"Maths"} date={"2024"} comment={intro} content={<MathsContent />} />
    </>
  );
};